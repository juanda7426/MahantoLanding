import React from "react";

const MenuCard = ({ product, isFlipped, onFlip, onOrder }) => {
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
                  <i className="fas fa-hamburger"></i>
                  <span>Sabor Don Juan</span>
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
                <button
                  onClick={() => onOrder(product.name)}
                  className="btn-order-whatsapp"
                >
                  <i className="fab fa-whatsapp"></i> Pedir
                </button>
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
            <div className="back-actions">
              <button
                onClick={() => onOrder(product.name)}
                className="btn-order-whatsapp"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "15px",
                }}
              >
                <i className="fab fa-whatsapp"></i> Ordenar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
