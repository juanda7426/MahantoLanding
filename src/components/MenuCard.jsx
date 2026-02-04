import React from "react";

const MenuCard = ({ product, isFlipped, onFlip, onAddToCart }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div key={product.id} data-aos="fade-up">
      <div className={`menu-card-container ${isFlipped ? "is-flipped" : ""}`}>
        <div className="menu-card-inner">
          {/* Front Side */}
          <div className="menu-card-front">
            <button className="btn-ver-corner" onClick={() => onFlip(product)}>
              Ver
            </button>
            <div className="card-image">
              {!imgError ? (
                <img
                  src={product.image}
                  alt={product.name}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="image-placeholder">
                  <i
                    className={`fas ${product.category === "bebidas" ? "fa-glass-cheers" : "fa-hamburger"}`}
                  ></i>
                  <span>Sabor Ma'Anto</span>
                </div>
              )}
              {product.badge && <span className="badge">{product.badge}</span>}
            </div>
            <div className="card-content">
              <div className="card-header-front">
                <h3>{product.name}</h3>
              </div>
              <div className="card-footer-front">
                <span className="price-front">{product.price}</span>
                {product.category !== "adiciones" ? (
                  <button
                    onClick={() => onAddToCart(product)}
                    className="btn-add-cart"
                  >
                    <i className="fas fa-cart-plus"></i> Agregar
                  </button>
                ) : (
                  <span className="info-badge">
                    <i className="fas fa-sticky-note"></i> Nota: Adicional
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="menu-card-back">
            <button
              className="btn-ver-corner"
              onClick={() => onFlip(null)}
              style={{ background: "#333" }}
            >
              X
            </button>
            <div className="back-header">
              <h3>Detalles</h3>
              <div className="back-divider"></div>
            </div>
            <p className="back-description">{product.description}</p>
            <div className="back-price-tag">{product.price}</div>
            <div className="back-actions" style={{ width: "100%" }}>
              {product.category !== "adiciones" ? (
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onFlip(null);
                  }}
                  className="btn-add-cart"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "15px",
                  }}
                >
                  <i className="fas fa-cart-plus"></i> Agregar al carrito
                </button>
              ) : (
                <div
                  className="info-badge highlight-note"
                  style={{ width: "100%", padding: "12px" }}
                >
                  <i className="fas fa-info-circle"></i>
                  Disponible como extra al armar tu hamburguesa.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
