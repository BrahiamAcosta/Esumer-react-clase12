import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        CineClub
      </Link>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/peliculas">Películas</Link>
      </nav>
    </header>
  );
}
export default Navbar;
