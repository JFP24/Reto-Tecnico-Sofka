import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>THIS IS HOME</h1>
      <Link to={"/lanzadera"}>
        <button>Naves Lanzaderas</button>
      </Link>
      <Link to={"/NoTripulada"}>
        <button>Naves No Tripuladas</button>
      </Link>
      <Link to={"/Tripulada"}>
        <button>Naves Tripuladas</button>
      </Link>
    </div>
  );
};
