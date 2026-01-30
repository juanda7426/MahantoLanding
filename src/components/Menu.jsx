import MenuCard from "./MenuCard";

const Menu = ({ data, selectedProduct, setSelectedProduct, handleOrder }) => {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Nuestro Menú</h2>
          <p className="slogan">
            Seleccionamos los mejores ingredientes para ti
          </p>
          <p className="category-title">HAMBURGUESAS</p>
        </div>

        <div className="menu-grid">
          {data.map((product) => (
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
