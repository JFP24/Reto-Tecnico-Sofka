import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLanzaderas } from "../../../Redux/Action/action";
import styles from "./cards.module.css";
import { Link } from "react-router-dom";
import { SearchName } from "../BuscarLanzadera/BuscarLanzadera";

export const Lanzadera = () => {
  const dispatch = useDispatch();
  const lanzaderas = useSelector((state) => state.lanzaderas);

  useEffect(() => {
    dispatch(getLanzaderas());
  }, [dispatch]);

  console.log(lanzaderas);

  return (
    <div>
      <h1>This is lanzadera</h1>
      <div>
        <Link to={"/crearLanzadera"}>
          <button>Crear NaveLanzadera</button>
        </Link>
      </div>
      <div>
        <SearchName />
      </div>
      <div className={styles.cards}>
        {lanzaderas.length > 0 ? (
          lanzaderas.map((d) => {
            return (
              <div className={styles.container}>
                <div> {d.nombre}</div>
                <div>{d.velocidad}</div>
                <div>{d.peso}</div>
                <div>{d.combustible}</div>
                <div>{d.pais}</div>
                <div>{d.creacion}</div>
              </div>
            );
          })
        ) : (
          <h2>No exitsten lanzaderas</h2>
        )}
      </div>
      <Link to={"/home"}>
        <button>Regresar</button>
      </Link>
    </div>
  );
};
