import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>RetoSofka</div>
      </div>
      <Link to={"/home"}>
        <button className={styles.button}>Regresar</button>
      </Link>
      <Link to={"/About"}>
        <button className={styles.button}>About</button>
      </Link>
    </div>
  );
};
