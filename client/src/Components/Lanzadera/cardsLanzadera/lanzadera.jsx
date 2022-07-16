import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLanzaderas, deleteLanzadera } from "../../../Redux/Action/action";
import styles from "./cards.module.css";
import { Link } from "react-router-dom";
import { SearchName } from "../BuscarLanzadera/BuscarLanzadera";
import { NavBar } from "../../Containers/NavBar/NavBar";

export const Lanzadera = () => {
  const dispatch = useDispatch();
  const lanzaderas = useSelector((state) => state.lanzaderas);

  useEffect(() => {
    dispatch(getLanzaderas());
  }, [dispatch]);

  console.log(lanzaderas);

  const handleDelete = (e) => {
    dispatch(deleteLanzadera(e));
    window.location.reload();
  };

  return (
    <div className={styles.todo}>
      <div>
        <NavBar />
      </div>
      <h1 className={styles.title}>Naves Lanzaderas</h1>
      <div>
        <Link to={"/crearLanzadera"}>
          <button className={styles.crear}>Crear Nave Lanzadera</button>
        </Link>
      </div>
      <div className={styles.input}>
        <SearchName />
      </div>
      <div className={styles.cards}>
        {lanzaderas.length > 0 ? (
          lanzaderas.map((d) => {
            return (
              <div className={styles.container}>
                <button
                  className={styles.delete}
                  key={d.id}
                  onClick={() => handleDelete(d.id)}
                >
                  x
                </button>
                <div className={styles.name}> {d.nombre.toUpperCase()}</div>
                <div>
                  <img className={styles.image} src={d.image} alt="" />
                </div>
                <div className={styles.propiedades}>
                  <div>Velocidad: {d.velocidad}</div>
                  <div>Peso :{d.peso}</div>
                  <div>Combustible: {d.combustible}</div>
                  <div>Pais :{d.pais}</div>
                  <div>Año: {d.creacion}</div>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No exitsten lanzaderas</h2>
        )}
      </div>
    </div>
  );
};
