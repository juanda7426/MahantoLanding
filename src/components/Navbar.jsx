import logo from "../assets/images/Logo.jpeg";

const Navbar = ({ scrolled, cartCount, onOpenCart }) => {
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-logo">
          <a href="#" className="logo-text">
            <img src={logo} alt="Ma'Anto Logo" />
            <span className="highlight"> MA'ANTO</span>
          </a>
        </div>

        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <a href="#menu">Menú</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>

          <button
            className={`nav-cart-btn ${cartCount > 0 ? "active" : ""}`}
            onClick={onOpenCart}
          >
            <i className="fas fa-shopping-basket"></i>
            {cartCount > 0 && (
              <span className="nav-cart-count" key={cartCount}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
