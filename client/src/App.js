import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Components/Containers/Landing/Landing.jsx";
import { Home } from "./Components/Containers/Home/Home.jsx";
import { Lanzadera } from "./Components/Lanzadera/cardsLanzadera/lanzadera.jsx";
import { CrearLanzadera } from "./Components/Lanzadera/CrearLanzadera/CrearLanzadera.jsx";
import { NoTripulada } from "./Components/NoTripuladas/cardsNoTripulada/cards.jsx";
import { CrearNoTripulada } from "./Components/NoTripuladas/CrearNoTripulada/CrearNoTripulada.jsx";
import { Tripulada } from "./Components/Tripuladas/cardsTripuladas/cardsTripuladas.jsx";
import { CrearTripulada } from "./Components/Tripuladas/CreatTripuladas/CrearTripulada.jsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/lanzadera" element={<Lanzadera />} />
      <Route path="/crearLanzadera" element={<CrearLanzadera />} />
      <Route path="/NoTripulada" element={<NoTripulada />} />
      <Route path="/CrearNoTripulada" element={<CrearNoTripulada />} />
      <Route path="/Tripulada" element={<Tripulada />} />
      <Route path="/CrearTripulada" element={<CrearTripulada />} />
    </Routes>
  );
}
export default App;
