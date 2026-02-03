const CartModal = ({
  cart,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemove,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const basePrice = parseInt(item.price.replace(/[^\d]/g, "")) * 1000;
      let itemPrice = basePrice;
      item.customizations?.adiciones.forEach((ad) => {
        itemPrice += parseInt(ad.price.replace(/[^\d]/g, "")) * 1000;
      });
      return total + itemPrice * item.quantity;
    }, 0);
  };

  const getItemPrice = (item) => {
    const basePrice = parseInt(item.price.replace(/[^\d]/g, "")) * 1000;
    let itemPrice = basePrice;
    item.customizations?.adiciones.forEach((ad) => {
      itemPrice += parseInt(ad.price.replace(/[^\d]/g, "")) * 1000;
    });
    return `$${(itemPrice / 1000).toLocaleString()} K`;
  };

  //********************* */
  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Tu Pedido</h2>
          <button className="close-cart" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <i className="fas fa-shopping-basket"></i>
            <p>Tu carrito está vacío</p>
            <button className="cart-btn" onClick={onClose}>
              Ver Menú
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={item.customizationKey || index} className="cart-item">
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <span className="item-price">{getItemPrice(item)}</span>
                    {item.customizations && (
                      <div className="item-customs">
                        {item.customizations.option && (
                          <p
                            className="custom-detail"
                            style={{
                              fontWeight: "bold",
                              color: "var(--primary)",
                            }}
                          >
                            Elección: {item.customizations.option}
                          </p>
                        )}
                        {item.customizations.adiciones.length > 0 && (
                          <p className="custom-detail">
                            +{" "}
                            {item.customizations.adiciones
                              .map((a) => a.name)
                              .join(", ")}
                          </p>
                        )}
                        <p className="custom-detail">
                          Salsas: {item.customizations.salsas.join(", ")}
                        </p>
                        {item.customizations.observaciones && (
                          <p className="custom-detail note">
                            "{item.customizations.observaciones}"
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="item-controls">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.customizationKey, -1)
                      }
                      className="qty-btn"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.customizationKey, 1)}
                      className="qty-btn"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                    <button
                      onClick={() => onRemove(item.customizationKey)}
                      className="remove-btn"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="total-section">
                <span>Total:</span>
                <span className="total-amount">
                  ${(calculateTotal() / 1000).toLocaleString()} K
                </span>
              </div>
              <button className="btn-back" onClick={onCheckout}>
                <i className="fas fa-hand-point-left"></i> Seguir Comprando
              </button>
              <button className="btn-checkout" onClick={onCheckout}>
                <i className="fas fa-hand-point-right"></i> Siguiente: Datos
                entrega
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
