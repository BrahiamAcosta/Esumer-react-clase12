import { Link } from "react-router-dom";

function PeliculaCard({ pelicula }) {
  return (
    <article className="movie-card">
      <div className={`movie-poster ${pelicula.color}`}>
        <span>{pelicula.poster}</span>
      </div>

      <div className="movie-info">
        <span className="genre">{pelicula.genero}</span>
        <h2>{pelicula.titulo}</h2>

        <div className="movie-meta">
          <span>{pelicula.anio}</span>
          <span>{pelicula.duracion}</span>
          <span>★ {pelicula.calificacion}</span>
        </div>

        <p className="price">${pelicula.precio}</p>

        <Link
          to={`/peliculas/${pelicula.id}`}
          className="button button-secondary"
        >
          Ver detalles
        </Link>
      </div>
    </article>
  );
}
export default PeliculaCard;
