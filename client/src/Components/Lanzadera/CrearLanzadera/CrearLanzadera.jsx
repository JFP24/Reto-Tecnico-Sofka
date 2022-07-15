import React from "react";
import { postLanzadera } from "../../../Redux/Action/action";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const CrearLanzadera = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    nombre: "",
    velocidad: "",
    peso: "",
    combustible: "",
    creacion: "",
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
      input.velocidad.length > 1 &&
      input.combustible.length > 1 &&
      input.creacion.length > 1 &&
      input.pais.length > 1
    ) {
      dispatch(postLanzadera(input));
      setInput({
        nombre: "",
        velocidad: "",
        peso: "",
        combustible: "",
        creacion: "",
        pais: "",
        image: "",
      });

      Swal.fire({
        icon: "success",
        title: "Ok",
        text: "Nave creada correctamente!",
      });
      navigate("/lanzadera");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tal vez te falten espacios por llena!",
      });
    }
    //window.location.reload();
  }

  return (
    <div>
      <h1>this is the created</h1>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Nombre:</label>
            <input
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
            <label>Velocidad:</label>
            <input
              placeholder="Ingrese Velocidad"
              type="numbre"
              name="velocidad"
              value={input.velocidad}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              //required
            />
          </div>
          <div>
            <label>Peso:</label>
            <input
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
            <label>Combustible:</label>
            <input
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
            <label>Año:</label>
            <input
              placeholder="Ingrese Año de creacion"
              type="text"
              name="creacion"
              value={input.creacion}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              //required
            />
          </div>
          <div>
            <label>Pais:</label>
            <input
              placeholder="Ingrese pais de origen"
              type="text"
              name="pais"
              value={input.pais}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              //required
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};
