import React from "react";
import MenuCard from "./MenuCard";

const Menu = ({
  allCategories,
  activeCategory,
  setActiveCategory,
  filteredProducts,
  selectedProduct,
  setSelectedProduct,
  handleOrder,
}) => {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Nuestro Menú</h2>
          <p>Seleccionamos los mejores ingredientes para ti</p>
        </div>

        <div className="category-filter" data-aos="fade-up">
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredProducts.map((product) => (
            <MenuCard
              key={product.id}
              product={product}
              isFlipped={selectedProduct?.id === product.id}
              onFlip={setSelectedProduct}
              onOrder={handleOrder}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
