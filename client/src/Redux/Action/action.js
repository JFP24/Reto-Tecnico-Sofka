import axios from "axios";
import { GET_LANZADERA, GET_NAME_LANZADERA } from "./type";

//aca hacemos la conexcion con el back para pedir iinformacion

//traemos lla informacion del modelo lanzadera
export const getLanzaderas = () => {
  return async (dispatch) => {
    try {
      //hacemos el llamado tipo get , por medio de promesos
      const navesLanzadera = await axios.get(`http://localhost:3001/lanzadera`);
      return dispatch({
        type: GET_LANZADERA,
        //retornamos a el reducer la data que nos esta llegando desde el back con las naves lanzaderas
        payload: navesLanzadera.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getNameLanzadera = (nombre) => {
  return async (dispatch) => {
    try {
      const getNameLanzadera = await axios.get(
        `http://localhost:3001/lanzadera?nombre=${nombre}`
      );
      return dispatch({
        type: GET_NAME_LANZADERA,
        payload: getNameLanzadera.data,
      });
    } catch (error) {
      console.log(error);
      return alert("NO EXITE NAVE");
    }
  };
};

export const postLanzadera = (payload) => {
  return async () => {
    console.log(payload);
    try {
      const post = await axios.post("http://localhost:3001/lanzadera", payload);
      return post;
    } catch (error) {
      console.log(error);
    }
  };
};
