import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTripuladas, deleteTripulada } from "../../../Redux/Action/action";
import { BuscarTripuladas } from "../BuscarTripuladas/BuscarTripuladas";
import styles from "./cards.module.css";

export const Tripulada = () => {
  const dispatch = useDispatch();
  const tripulada = useSelector((state) => state.tripulada);

  useEffect(() => {
    dispatch(getTripuladas());
  }, [dispatch]);

  console.log(tripulada);

  const handleDelete = (e) => {
    dispatch(deleteTripulada(e));
    window.location.reload();
  };

  return (
    <div>
      <h1>This is tripulada</h1>
      <div>
        <Link to={"/CrearTripulada"}>
          <button>crear</button>
        </Link>
      </div>
      <div>
        <BuscarTripuladas />
      </div>
      <div></div>
      <div className={styles.cards}>
        {tripulada.length > 0 ? (
          tripulada.map((d) => {
            return (
              <div className={styles.container} key={d.id}>
                <button onClick={() => handleDelete(d.id)}>x</button>
                <div> {d.nombre}</div>
                <div>{d.capacidad}</div>
                <div>{d.peso}</div>
                <div>{d.combustible}</div>
                <div>{d.pais}</div>
                <div>{d.orbita}</div>
              </div>
            );
          })
        ) : (
          <h2>No exitsten tripuladas</h2>
        )}
      </div>
      <Link to={"/home"}>
        <button>Regresar</button>
      </Link>
    </div>
  );
};
