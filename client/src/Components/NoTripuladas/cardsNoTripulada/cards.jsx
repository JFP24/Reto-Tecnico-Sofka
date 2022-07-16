import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNoTripuladas,
  deleteNoTripulada,
} from "../../../Redux/Action/action";
import { BuscarNoTripuladas } from "../BuscarNoTripuladas/BuscarNoTripulada";
import styles from "./cards.module.css";

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
    <div>
      <h1>This is notripulada</h1>
      <div>
        <Link to={"/CrearNoTripulada"}>
          <button>crear</button>
        </Link>
      </div>
      <div>
        <BuscarNoTripuladas />
      </div>
      <div></div>
      <div className={styles.cards}>
        {noTripuladas.length > 0 ? (
          noTripuladas.map((d) => {
            return (
              <div className={styles.container} key={d.id}>
                <button onClick={() => handleDelete(d.id)}>x</button>
                <div> {d.nombre}</div>
                <div>{d.velocidad}</div>
                <div>{d.peso}</div>
                <div>{d.combustible}</div>
                <div>{d.pais}</div>
                <div>{d.funcion}</div>
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
