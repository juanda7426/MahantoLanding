import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import menuData from "./data/menu.json";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Info from "./components/Info";
import Footer from "./components/Footer";
import QRModal from "./components/QRModal";

const App = () => {
  // States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Constants
  const whatsappNumber = "573207643590";
  const heroImages = [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  ];
  const allCategories = ["Todos", ...menuData.map((cat) => cat.category)];
  const filteredProducts =
    activeCategory === "Todos"
      ? menuData.flatMap((cat) => cat.items)
      : menuData.find((cat) => cat.category === activeCategory)?.items || [];

  // Effects
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });

    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setParallaxOffset({
        x: (window.innerWidth - e.pageX * 2) / 100,
        y: (window.innerHeight - e.pageY * 2) / 100,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
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
  }, [selectedProduct, activeCategory]);

  // Handlers
  const handleOrder = (productName) => {
    const message = encodeURIComponent(
      `Hola 👋, vengo desde la página web. Quiero pedir: ${productName}`,
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="app-wrapper">
      <Navbar scrolled={scrolled} />

      <Hero
        heroImages={heroImages}
        currentSlide={currentSlide}
        setIsModalOpen={setIsModalOpen}
        whatsappNumber={whatsappNumber}
      />

      <Menu
        allCategories={allCategories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        filteredProducts={filteredProducts}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        handleOrder={handleOrder}
      />

      <Info />

      <Footer whatsappNumber={whatsappNumber} />

      {isModalOpen && <QRModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default App;
