import { useState } from "react";
import Swal from "sweetalert2";

const CheckoutModal = ({ isOpen, onClose, onConfirm }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    unidad: "",
    apto: "",
    pago: "Efectivo",
    observaciones: "",
  });

  if (!isOpen) return null;

  //********************* */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.nombre ||
      !formData.telefono ||
      !formData.direccion ||
      !formData.apto ||
      !formData.pago
    ) {
      Swal.fire({
        title: "Campos incompletos",
        text: "Por favor completa todos los campos obligatorios para la entrega.",
        icon: "error",
        confirmButtonColor: "var(--primary)",
      });
      return;
    }
    onConfirm(formData);
    setFormData({
      nombre: "",
      telefono: "",
      direccion: "",
      unidad: "",
      apto: "",
      pago: "Efectivo",
      observaciones: "",
    });
  };

  //********************* */
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="checkout-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="custom-modal-header">
          <h3>Datos de Entrega</h3>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-group">
            <label>Nombre Completo *</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="¿A quién entregamos?"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Teléfono *</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Tu contacto"
                required
              />
            </div>
            <div className="form-group">
              <label>Medio de Pago *</label>
              <select name="pago" value={formData.pago} onChange={handleChange}>
                <option value="Efectivo">Efectivo</option>
                <option value="Transferencia (Bancolombia/Nequi)">
                  Transferencia
                </option>
                <option value="Datáfono">Datáfono</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Dirección Exacta *</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Calle, Carrera, Barrio..."
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Unidad / Edificio</label>
              <input
                type="text"
                name="unidad"
                value={formData.unidad}
                onChange={handleChange}
                placeholder="Nombre (si aplica)"
              />
            </div>
            <div className="form-group">
              <label>Apto / Casa / Piso *</label>
              <input
                type="text"
                name="apto"
                value={formData.apto}
                onChange={handleChange}
                placeholder="Ej: Apto 502"
                required
              />
            </div>
          </div>

          <div className="form-row-txt ">
            <div className="form-group">
              <label>Observaciones</label>
              <textarea
                name="observaciones"
                rows={3}
                value={formData.observaciones}
                onChange={handleChange}
                placeholder="Ej: Entrega en la portería"
              />
            </div>
          </div>

          <div className="checkout-footer">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Volver
            </button>
            <button type="submit" className="btn-confirm-order">
              <i className="fab fa-whatsapp"></i> Confirmar Pedido
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
