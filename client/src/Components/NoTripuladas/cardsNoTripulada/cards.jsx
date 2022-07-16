import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNoTripuladas,
  deleteNoTripulada,
} from "../../../Redux/Action/action";
import { BuscarNoTripuladas } from "../BuscarNoTripuladas/BuscarNoTripulada";
import styles from "./cards.module.css";
import { NavBar } from "../../Containers/NavBar/NavBar";

export const NoTripulada = () => {
  const dispatch = useDispatch();
  const noTripuladas = useSelector((state) => state.noTripulada);

  useEffect(() => {
    dispatch(getNoTripuladas());
  }, [dispatch]);

  console.log(noTripuladas);

  const handleDelete = (e) => {
    dispatch(deleteNoTripulada(e));
    window.location.reload();
  };

  return (
    <div className={styles.todo}>
      <div>
        <NavBar />
      </div>
      <h1 className={styles.title}>Naves No Tripuladas</h1>
      <div>
        <Link to={"/CrearNoTripulada"}>
          <button className={styles.crear}>Crear nave No Tripúlada</button>
        </Link>
      </div>
      <div className={styles.input}>
        <BuscarNoTripuladas />
      </div>

      <div className={styles.cards}>
        {noTripuladas.length > 0 ? (
          noTripuladas.map((d) => {
            return (
              <div className={styles.container} key={d.id}>
                <button
                  className={styles.delete}
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
                  <div>Peso : {d.peso}</div>
                  <div>Combustible: {d.combustible}</div>
                  <div>Pais : {d.pais}</div>
                  <div>Funcion :{d.funcion}</div>
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
