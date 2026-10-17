import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import DetallePelicula from "./pages/DetallePelicula.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Catalogo />} />
          <Route path="/peliculas/:id" element={<DetallePelicula />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
