import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameTripuladas } from "../../../Redux/Action/action";
import styles from "./buscar.module.css";
import Swal from "sweetalert2";

export const BuscarTripuladas = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    buscar: "",
  });
  const handleInputChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };
  const handleOnClick = async (e) => {
    e.preventDefault();
    if (input.buscar) {
      dispatch(getNameTripuladas(input.buscar));
      setInput({
        buscar: "",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Opss...",
        text: "Debes colorcar una busquedad",
      });
    }
  };

  return (
    <div>
      <input
        className={styles.input}
        name="buscar"
        placeholder="Buscá tu nave...."
        onChange={handleInputChange}
        value={input.buscar}
        autoComplete="off"
      ></input>
      <button onClick={handleOnClick} className={styles.buscar}>
        Buscar
      </button>
      <button
        className={styles.cargar}
        onClick={() => {
          window.location.reload();
        }}
      >
        CargarTodos
      </button>
    </div>
  );
};
