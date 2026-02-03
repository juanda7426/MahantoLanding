const Hero = ({ heroImages, currentSlide }) => {
  return (
    <header className="hero">
      <div className="hero-carousel">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`hero-slide ${idx === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="hero-overlay"></div>
      </div>

      <div className="smoke-container">
        <div
          className="smoke-particle"
          style={{ left: "10%", animationDelay: "0s" }}
        ></div>
        <div
          className="smoke-particle"
          style={{ left: "40%", animationDelay: "2s" }}
        ></div>
        <div
          className="smoke-particle"
          style={{ left: "70%", animationDelay: "4s" }}
        ></div>
      </div>

      <div className="hero-content container">
        <div className="hero-info" data-aos="fade-up">
          <h1>
            Hamburguesas
            <br />
            <span className="highlight">Ma'Anto</span>
          </h1>
          <p className="slogan">Artesanía, sabor y pasión en cada bocado.</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
