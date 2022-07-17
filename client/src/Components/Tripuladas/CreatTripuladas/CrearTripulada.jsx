import React from "react";
import { postTripuladas } from "../../../Redux/Action/action";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "./crear.module.css";
import { Link } from "react-router-dom";

export const CrearTripulada = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    nombre: "",
    capacidad: "",
    peso: "",
    combustible: "",
    orbita: "",
    pais: "",
    image: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  function handleSubmit(e) {
    e.preventDefault(e);

    if (
      input.nombre.length > 1 &&
      input.capacidad.length >= 1 &&
      input.combustible.length > 1 &&
      input.orbita.length > 1 &&
      input.pais.length > 1
    ) {
      dispatch(postTripuladas(input));

      Swal.fire({
        icon: "success",
        title: "Ok",
        text: "Nave creada correctamente!",
      });
      navigate("/Tripulada");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tal vez te falten espacios por llena!",
      });
    }
  }

  return (
    <div className={styles.container}>
      <Link to={"/Tripulada"}>
        <button className={styles.regresar}>Regresar</button>
      </Link>
      <h1 className={styles.title}>Crear Nave Tripulada</h1>
      <div className={styles.todo}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className={styles.label}>Nombre:</label>
            <input
              className={styles.input}
              placeholder="Ingrese Nombre"
              type="text"
              name="nombre"
              value={input.nombre}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              //required
            />
          </div>
          <div>
            <label className={styles.label}>capacidad:</label>
            <input
              className={styles.input}
              placeholder="Ingrese capacidad"
              type="numbre"
              name="capacidad"
              value={input.capacidad}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              //required
            />
          </div>
          <div>
            <label className={styles.label}>Peso:</label>
            <input
              className={styles.input}
              placeholder="Ingrese Nombre"
              type="numbre"
              name="peso"
              value={input.peso}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              //required
            />
          </div>
          <div>
            <label className={styles.label}>Combustible:</label>
            <input
              className={styles.input}
              placeholder="Ingrese tipo de Combustible"
              type="text"
              name="combustible"
              value={input.combustible}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              //required
            />
          </div>
          <div>
            <label className={styles.label}>orbita:</label>
            <input
              className={styles.input}
              placeholder="Ingrese la funcion"
              type="text"
              name="orbita"
              value={input.orbita}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              //required
            />
          </div>
          <div>
            <label className={styles.label}>Pais:</label>
            <input
              className={styles.input}
              placeholder="Ingrese pais de origen"
              type="text"
              name="pais"
              value={input.pais}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              //required
            />
          </div>
          <div>
            <label className={styles.label}>Imagen:</label>
            <input
              className={styles.input}
              placeholder="Ingrese imagen"
              type="text"
              name="image"
              value={input.image}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              //required
            />
          </div>
          <button className={styles.crear} type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};
