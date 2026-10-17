import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">Tu videoclub digital</span>

        <h1>Una buena película para cada momento.</h1>

        <p>
          Explora nuestro catálogo, descubre nuevas historias y alquila tus
          películas favoritas.
        </p>

        <Link to="/peliculas" className="button">
          Explorar catálogo
        </Link>
      </div>
    </section>
  );
}
export default Home;
