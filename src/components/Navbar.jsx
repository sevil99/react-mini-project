import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Главная</Link>
      <Link to="/movies">Мой список</Link>
      <Link to="/api-movies">Фильмы из API</Link>
    </nav>
  );
}

export default Navbar;
