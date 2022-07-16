import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export const Landing = () => {
  return (
    <div className={styles.page}>
      <div className={styles.pagesdos}>
        <h1 className={styles.titulo}>RETO SOFKA</h1>
        <Link to="/home">
          <button className={styles.buton}>HOME</button>
        </Link>
        <p className={styles.parrafo}>
          " Debemos intentar comprender el comienzo del Universo a partir de
          bases científicas. Puede que sea una tarea más allá de nuestras
          capacidades, pero al menos deberíamos intentarlo. "
          <br /> – Stephen Hawking
        </p>
      </div>
    </div>
  );
};
