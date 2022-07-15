import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Components/Landing/Landing.jsx";
import { Home } from "./Components/Home/Home.jsx";
import { Lanzadera } from "./Components/Lanzadera/cardsLanzadera/lanzadera.jsx";
import { CrearLanzadera } from "./Components/Lanzadera/CrearLanzadera/CrearLanzadera.jsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/lanzadera" element={<Lanzadera />} />
      <Route path="/crearLanzadera" element={<CrearLanzadera />} />
    </Routes>
  );
}
export default App;
