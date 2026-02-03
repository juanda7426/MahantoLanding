import { useState } from "react";
import { salsasOptions } from "../data/menu";

const CustomizationModal = ({
  product,
  isOpen,
  onClose,
  onConfirm,
  adiciones,
}) => {
  const [selectedAdiciones, setSelectedAdiciones] = useState([]);
  const [selectedSalsas, setSelectedSalsas] = useState(["Todo"]);
  const [observaciones, setObservaciones] = useState("");
  const [productOption, setProductOption] = useState("");

  if (!isOpen || !product) return null;

  //********************* */
  const handleToggleAdicion = (adicion) => {
    setSelectedAdiciones((prev) =>
      prev.find((a) => a.id === adicion.id)
        ? prev.filter((a) => a.id !== adicion.id)
        : [...prev, adicion],
    );
  };

  const handleToggleSalsa = (salsa) => {
    if (salsa === "Todo") {
      setSelectedSalsas(["Todo"]);
      return;
    }
    if (salsa === "Sin salsas") {
      setSelectedSalsas(["Sin salsas"]);
      return;
    }

    setSelectedSalsas((prev) => {
      const filtered = prev.filter((s) => s !== "Todo" && s !== "Sin salsas");
      return filtered.includes(salsa)
        ? filtered.filter((s) => s !== salsa)
        : [...filtered, salsa];
    });
  };

  const handleConfirm = () => {
    if (product.options && !productOption) {
      alert(`Por favor elige una opción de: ${product.options.title}`);
      return;
    }

    onConfirm(product, {
      adiciones: selectedAdiciones,
      salsas: selectedSalsas,
      observaciones: observaciones,
      option: productOption,
    });
    // Reset state for next time
    setSelectedAdiciones([]);
    setSelectedSalsas(["Todo"]);
    setObservaciones("");
    setProductOption("");
    onClose();
  };

  //********************* */
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="custom-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="custom-modal-header">
          <div className="header-info">
            <h3>{product.name}</h3>
            <p className="product-base-desc">{product.description}</p>
          </div>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="custom-modal-body">
          {/* Section for mandatory options (e.g. Meat Choice) */}
          {product.options && (
            <div className="custom-section compact">
              <h4>{product.options.title} *</h4>
              <div className="tags-container">
                {product.options.choices.map((c) => (
                  <button
                    key={c}
                    className={`tag-btn choice-btn ${productOption === c ? "active" : ""}`}
                    onClick={() => setProductOption(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="custom-section">
            <h4>Adiciones</h4>
            <div className="options-grid">
              {adiciones.map((ad) => (
                <label
                  key={ad.id}
                  className={`option-card ${selectedAdiciones.find((a) => a.id === ad.id) ? "active" : ""}`}
                >
                  <input
                    type="checkbox"
                    onChange={() => handleToggleAdicion(ad)}
                    checked={!!selectedAdiciones.find((a) => a.id === ad.id)}
                  />
                  <div className="option-info">
                    <span className="option-name">{ad.name}</span>
                    <span className="option-price">+{ad.price}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="custom-section">
            <h4>Salsas / Vegetales</h4>
            <div className="tags-container">
              {salsasOptions.map((s) => (
                <button
                  key={s}
                  className={`tag-btn ${selectedSalsas.includes(s) ? "active" : ""}`}
                  onClick={() => handleToggleSalsa(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="custom-section">
            <h4>Observaciones especiales</h4>
            <textarea
              placeholder="Ej: Término de la carne, sin algún ingrediente específico..."
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
            />
          </div>
        </div>

        <div className="custom-modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn-confirm-add" onClick={handleConfirm}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizationModal;
