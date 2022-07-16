import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link to={"/home"}>
          <div className={styles.title}>RetoSofka</div>
        </Link>
      </div>

      <Link to={"/About"}>
        <button>About</button>
      </Link>
    </div>
  );
};
