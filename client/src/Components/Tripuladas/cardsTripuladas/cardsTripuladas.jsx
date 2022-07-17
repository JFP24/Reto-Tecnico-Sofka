import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTripuladas, deleteTripulada } from "../../../Redux/Action/action";
import { BuscarTripuladas } from "../BuscarTripuladas/BuscarTripuladas.jsx";
import styles from "./cards.module.css";
import { NavBar } from "../../Containers/NavBar/NavBar";

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
    <div className={styles.todo}>
      <div>
        <NavBar />
      </div>
      <h1 className={styles.title}>Naves Tripuladas</h1>
      <div>
        <Link to={"/CrearTripulada"}>
          <button className={styles.crear}>Crea Una Nave Tripulada</button>
        </Link>
      </div>
      <div className={styles.input}>
        <BuscarTripuladas />
      </div>
      <div></div>
      <div className={styles.cards}>
        {tripulada.length > 0 ? (
          tripulada.map((d) => {
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
                  <div> Capacidad :{d.capacidad}</div>
                  <div>Peso : {d.peso}</div>
                  <div>Cobustible :{d.combustible}</div>
                  <div> Pais Origen:{d.pais}</div>
                  <div>Orbita :{d.orbita}</div>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No exitsten tripuladas</h2>
        )}
      </div>
    </div>
  );
};
