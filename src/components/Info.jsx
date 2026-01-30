import React from "react";

const Info = () => {
  const address = "Calle Falsa 123, Barrio Gourmet";
  const googleMapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=4.6728,-74.0541"; // Example coords
  const wazeUrl = "https://waze.com/ul?ll=4.6728,-74.0541&navigate=yes";

  return (
    <section id="contacto" className="info-section">
      <div className="container">
        <div className="info-grid">
          <div className="info-item" data-aos="fade-right">
            <h3>
              <i className="fas fa-map-marker-alt"></i> Encuéntranos
            </h3>
            <p>{address}</p>
            <div className="map-buttons">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-map google"
              >
                <i className="fab fa-google"></i> Google Maps
              </a>
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-map waze"
              >
                <i className="fab fa-waze"></i> Waze
              </a>
            </div>
          </div>
          <div className="info-item" data-aos="fade-up">
            <h3>
              <i className="fas fa-clock"></i> Horarios
            </h3>
            <ul className="hours-list">
              <li>
                <span>Lunes - Jueves:</span> 12:00 PM - 10:00 PM
              </li>
              <li>
                <span>Viernes - Sábado:</span> 12:00 PM - 11:30 PM
              </li>
              <li>
                <span>Domingos:</span> 12:00 PM - 9:00 PM
              </li>
            </ul>
          </div>
          <div className="info-item" data-aos="fade-left">
            <h3>
              <i className="fas fa-share-alt"></i> Síguenos
            </h3>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
