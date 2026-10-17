import { useState } from "react";
import { peliculas } from "../data/peliculas.js";
import PeliculaCard from "../components/PeliculaCard";

function Catalogo() {
  const [busqueda, setBusqueda] = useState("");

  const peliculasFiltradas = peliculas.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <section className="container">
      <div className="page-header">
        <div>
          <span className="eyebrow">Catálogo</span>
          <h1>Encuentra tu próxima película</h1>
        </div>
        <input
          type="text"
          placeholder="Buscar película..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {peliculasFiltradas.length > 0 ? (
        <div className="movie-grid">
          {peliculasFiltradas.map((pelicula) => (
            <PeliculaCard key={pelicula.id} pelicula={pelicula} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No encontramos películas</h2>
          <p>Intenta realizar la búsqueda utilizando otro nombre.</p>
        </div>
      )}
    </section>
  );
}
export default Catalogo;
