import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameLanzadera } from "../../../Redux/Action/action";

export const SearchName = () => {
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
      dispatch(getNameLanzadera(input.buscar));
      setInput({
        buscar: "",
      });
    } else {
      return alert("Colocar un busqueda");
    }
  };

  return (
    <div>
      <input
        name="buscar"
        placeholder="Buscá tu juego...."
        onChange={handleInputChange}
        value={input.buscar}
        autoComplete="off"
      ></input>
      <button onClick={handleOnClick}>Buscar</button>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        CargarTodos
      </button>
    </div>
  );
};
