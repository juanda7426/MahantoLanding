import { useEffect, useState } from "react";
import AOS from "aos";
import clasicaImg from "../src/assets/images/Clasic.jpeg";
import americanaImg from "../src/assets/images/American.jpeg";
import jaliscoImg from "../src/assets/images/Jalisco.jpeg";
import quesoAsadoImg from "../src/assets/images/QuesoAsado.jpeg";
import pulledPorkImg from "../src/assets/images/Pulled.jpeg";
import hamburguesa3QImg from "../src/assets/images/3Q.jpeg";
import costraImg from "../src/assets/images/Costra.jpeg";
import "aos/dist/aos.css";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Info from "./components/Info";
import Footer from "./components/Footer";
import QRModal from "./components/QRModal";
import { heroImages, menuData } from "./data/menu";

const App = () => {
  // States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Constants
  const whatsappNumber = "573207643590";

  //*********************** */
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
  }, [selectedProduct]);

  // Handlers
  const handleOrder = (productName) => {
    const message = encodeURIComponent(
      `Hola 👋, vengo desde la página web. Quiero pedir: ${productName}`,
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  //*********************** */
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
        data={menuData}
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
