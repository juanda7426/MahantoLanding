import { useState } from "react";
import MenuCard from "./MenuCard";

const Menu = ({ data, selectedProduct, setSelectedProduct, addToCart }) => {
  const [activeCategory, setActiveCategory] = useState("hamburguesas");

  const categories = [
    { id: "hamburguesas", label: "HAMBURGUESAS" },
    { id: "adiciones", label: "ADICIONES" },
    { id: "bebidas", label: "BEBIDAS" },
  ];

  const filteredData = data.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Nuestro Menú</h2>
          <p className="slogan">
            Seleccionamos los mejores ingredientes para ti
          </p>
        </div>

        <div className="category-filter" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredData.map((product) => (
            <MenuCard
              key={product.id}
              product={product}
              isFlipped={selectedProduct?.id === product.id}
              onFlip={setSelectedProduct}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
