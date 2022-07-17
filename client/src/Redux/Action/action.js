import axios from "axios";
import {
  GET_LANZADERA,
  GET_NAME_LANZADERA,
  GET_NO_TRIPULADA,
  GET_NAME_NO_TRIPULADA,
  GET__TRIPULADA,
  GET_NAME__TRIPULADA,
} from "./type";
import Swal from "sweetalert2";
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
      return Swal.fire({
        icon: "error",
        title: "Opss...",
        text: "No exite esa nave, intenta con otra",
      });
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

export const deleteLanzadera = (id) => {
  return async () => {
    try {
      const post = await axios.delete(
        `http://localhost:3001/lanzadera?id=${id}`
      );
      return post;
    } catch (error) {
      console.log(error);
    }
  };
};

export const getNoTripuladas = () => {
  return async (dispatch) => {
    try {
      //hacemos el llamado tipo get , por medio de promesos
      const navesNoTripuladas = await axios.get(
        `http://localhost:3001/notripulada`
      );
      return dispatch({
        type: GET_NO_TRIPULADA,
        //retornamos a el reducer la data que nos esta llegando desde el back con las naves lanzaderas
        payload: navesNoTripuladas.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getNameNoTripuladas = (nombre) => {
  return async (dispatch) => {
    try {
      const getNameNoTripuladas = await axios.get(
        `http://localhost:3001/notripulada?nombre=${nombre}`
      );
      return dispatch({
        type: GET_NAME_NO_TRIPULADA,
        payload: getNameNoTripuladas.data,
      });
    } catch (error) {
      console.log(error);
      return Swal.fire({
        icon: "error",
        title: "Opss...",
        text: "No exite esa nave, intenta con otra",
      });
    }
  };
};

export const postNoTripuladas = (payload) => {
  return async () => {
    console.log(payload);
    try {
      const post = await axios.post(
        "http://localhost:3001/notripulada",
        payload
      );
      return post;
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteNoTripulada = (id) => {
  return async () => {
    try {
      const post = await axios.delete(
        `http://localhost:3001/notripulada?id=${id}`
      );
      return post;
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTripuladas = () => {
  return async (dispatch) => {
    try {
      //hacemos el llamado tipo get , por medio de promesos
      const navesTripuladas = await axios.get(
        `http://localhost:3001/tripulada`
      );
      return dispatch({
        type: GET__TRIPULADA,
        //retornamos a el reducer la data que nos esta llegando desde el back con las naves lanzaderas
        payload: navesTripuladas.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getNameTripuladas = (nombre) => {
  return async (dispatch) => {
    try {
      const getNameTripuladas = await axios.get(
        `http://localhost:3001/tripulada?nombre=${nombre}`
      );
      return dispatch({
        type: GET_NAME__TRIPULADA,
        payload: getNameTripuladas.data,
      });
    } catch (error) {
      console.log(error);
      return Swal.fire({
        icon: "error",
        title: "Opss...",
        text: "No exite esa nave, intenta con otra",
      });
    }
  };
};

export const postTripuladas = (payload) => {
  return async () => {
    console.log(payload);
    try {
      const post = await axios.post("/tripulada", payload);
      return post;
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTripulada = (id) => {
  return async () => {
    try {
      const delet = await axios.delete(`/tripulada?id=${id}`);
      return delet;
    } catch (error) {
      console.log(error);
    }
  };
};
