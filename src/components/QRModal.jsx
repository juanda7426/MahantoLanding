import React from "react";

const QRModal = ({ setIsModalOpen }) => {
  return (
    <div className="modal" onClick={() => setIsModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={() => setIsModalOpen(false)}>
          &times;
        </span>
        <h3>Escanea nuestro QR</h3>
        <div className="qr-container">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${window.location.href}`}
            alt="QR Code"
          />
        </div>
        <p>¡Lleva nuestro menú en tu celular!</p>
      </div>
    </div>
  );
};

export default QRModal;
