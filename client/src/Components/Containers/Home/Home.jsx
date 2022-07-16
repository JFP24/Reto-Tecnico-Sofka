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
        <div>
          <p className={styles.parrafo}>
            Entre los más importantes logros tecnológicos de la civilización
            humana y, lógicamente, más reciente que el ferrocarril, se
            encuentran las naves espaciales: increíbles vehículos capaces de
            abandonar la atmósfera terrestre, que destacan por su potencia y su
            velocidad. Desde el punto de vista físico, hay dos conceptos que
            siempre me han fascinado: el tiempo y la energía
          </p>
        </div>
        <div>
          <h1 className={styles.title}>¿Conoces alguna nave?</h1>
        </div>
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
