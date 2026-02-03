import logo from "../assets/images/Logo.jpeg";
const Navbar = ({ scrolled }) => {
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-logo">
          <a href="#" className="logo-text">
            <img src={logo} alt="Ma'Anto Logo" />
            MA'ANTO
          </a>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#menu">Menú</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
