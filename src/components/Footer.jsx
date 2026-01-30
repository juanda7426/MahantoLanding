import React from "react";

const Footer = ({ whatsappNumber }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            &copy; 2026 Hamburguesas Don Juan. Todos los derechos reservados.
          </p>
        </div>
      </div>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </footer>
  );
};

export default Footer;
