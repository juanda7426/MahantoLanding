import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Info from "./components/Info";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import CustomizationModal from "./components/CustomizationModal";
import CheckoutModal from "./components/CheckoutModal";
import { heroImages, menuData, adicionesData, info } from "./data/menu";

const App = () => {
  // States
  const [scrolled, setScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [productToCustomize, setProductToCustomize] = useState(null);

  // Constants
  const whatsappNumber = info.phone;

  //********************* */
  // Effects
  useEffect(() => {
    AOS.init({ duration: 1600, once: true, offset: 100 });

    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [selectedProduct]);

  // Handlers
  const addToCart = (product) => {
    setProductToCustomize(product);
    setIsCustomizing(true);
  };

  const confirmCustomization = (product, customizations) => {
    setCart((prevCart) => {
      const customizationKey = JSON.stringify({
        adiciones: customizations.adiciones.map((a) => a.id).sort(),
        salsas: customizations.salsas.sort(),
        observaciones: customizations.observaciones,
        option: customizations.option,
      });

      const existingItem = prevCart.find(
        (item) =>
          item.id === product.id && item.customizationKey === customizationKey,
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.customizationKey === customizationKey
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
          customizations,
          customizationKey,
        },
      ];
    });
  };

  const removeItemByStoreKey = (storeKey) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.customizationKey !== storeKey),
    );
  };

  const updateQuantity = (storeKey, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.customizationKey === storeKey) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  const sendOrderToWhatsApp = (deliveryData) => {
    if (cart.length === 0) return;

    let message = "🍔 *NUEVO PEDIDO - MA'ANTO*\n";
    message += "--------------------------------\n\n";

    message += "👤 *DATOS DE ENTREGA*\n";
    message += `• *Nombre:* ${deliveryData.nombre}\n`;
    message += `• *Teléfono:* ${deliveryData.telefono}\n`;
    message += `• *Dirección:* ${deliveryData.direccion}\n`;
    if (deliveryData.unidad) message += `• *Unidad:* ${deliveryData.unidad}\n`;
    message += `• *Apto/Piso:* ${deliveryData.apto}\n`;
    message += `• *Pago:* ${deliveryData.pago}\n\n`;

    message += "🛒 *DETALLE DEL PEDIDO*\n";
    let total = 0;

    cart.forEach((item) => {
      const basePrice = parseInt(item.price.replace(/[^\d]/g, "")) * 1000;
      let itemPrice = basePrice;

      item.customizations?.adiciones.forEach((ad) => {
        itemPrice += parseInt(ad.price.replace(/[^\d]/g, "")) * 1000;
      });

      const subtotal = itemPrice * item.quantity;
      total += subtotal;

      message += `• *${item.quantity}x ${item.name.trim()}*\n`;
      if (item.customizations) {
        if (item.customizations.option) {
          message += `   _Selección: ${item.customizations.option}_\n`;
        }
        if (item.customizations.adiciones.length > 0) {
          message += `   _Adic: ${item.customizations.adiciones.map((a) => a.name).join(", ")}_\n`;
        }
        message += `   _Salsas: ${item.customizations.salsas.join(", ")}_\n`;
        if (item.customizations.observaciones) {
          message += `   _Nota: ${item.customizations.observaciones}_\n`;
        }
      }
      message += `   Subtotal: $${(subtotal / 1000).toLocaleString()} K\n\n`;
    });

    message += "--------------------------------\n";
    message += `💰 *TOTAL A PAGAR: $${(total / 1000).toLocaleString()} K*`;
    message += "\n--------------------------------\n";
    message += "\n_Pedido generado desde la web_";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    setCart([]);
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
  };

  //********************* */
  return (
    <div className="app-wrapper">
      <Navbar scrolled={scrolled} />

      <Hero heroImages={heroImages} currentSlide={currentSlide} />

      <Menu
        data={menuData}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        addToCart={addToCart}
      />

      <Info info={info} />

      <Footer whatsappNumber={whatsappNumber} />

      {cart.length > 0 && (
        <button className="cart-float" onClick={() => setIsCartOpen(true)}>
          <i className="fas fa-shopping-cart"></i>
          <span
            key={cart.reduce((a, b) => a + b.quantity, 0)}
            className="cart-count"
          >
            {cart.reduce((a, b) => a + b.quantity, 0)}
          </span>
        </button>
      )}

      <CartModal
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItemByStoreKey}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CustomizationModal
        product={productToCustomize}
        isOpen={isCustomizing}
        onClose={() => setIsCustomizing(false)}
        onConfirm={confirmCustomization}
        adiciones={adicionesData}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onConfirm={sendOrderToWhatsApp}
      />
    </div>
  );
};

export default App;
