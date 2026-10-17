import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { peliculas } from "../data/peliculas";

function DetallePelicula() {
  const { id } = useParams();

  const [alquilada, setAlquilada] = useState(false);

  const pelicula = peliculas.find((pelicula) => pelicula.id === Number(id));

  if (!pelicula) {
    return (
      <section className="container not-found">
        <h1>Película no encontrada</h1>

        <p>La película que estás buscando no existe en nuestro catálogo.</p>

        <Link to="/peliculas" className="button">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  function alquilarPelicula() {
    setAlquilada(true);
  }

  return (
    <section className="container">
      <Link to="/peliculas" className="back-link">
        ← Volver al catálogo
      </Link>

      <div className="movie-detail">
        <div className={`detail-poster ${pelicula.color}`}>
          <span>{pelicula.poster}</span>
        </div>

        <div className="detail-content">
          <span className="genre">{pelicula.genero}</span>

          <h1>{pelicula.titulo}</h1>

          <div className="movie-meta detail-meta">
            <span>{pelicula.anio}</span>
            <span>{pelicula.duracion}</span>
            <span>★ {pelicula.calificacion}</span>
          </div>

          <h3>Sinopsis</h3>

          <p className="description">{pelicula.descripcion}</p>

          <div className="rental-box">
            <div>
              <span>Precio de alquiler</span>

              <strong>${pelicula.precio.toLocaleString("es-CO")}</strong>
            </div>

            {!alquilada ? (
              <button className="button" onClick={alquilarPelicula}>
                Alquilar película
              </button>
            ) : (
              <div className="success-message">
                ✓ Película alquilada correctamente
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetallePelicula;
