import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className={styles.container}>
        <div className={styles.routes}>
          <Link to={"/lanzadera"}>
            <button className={styles.button}>Naves Lanzaderas</button>
          </Link>
          <Link to={"/NoTripulada"}>
            <button className={styles.button}>Naves No Tripuladas</button>
          </Link>
          <Link to={"/Tripulada"}>
            <button className={styles.button}>Naves Tripuladas</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
