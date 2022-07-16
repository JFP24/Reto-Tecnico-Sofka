import {
  GET_LANZADERA,
  GET_NAME_LANZADERA,
  GET_NO_TRIPULADA,
  GET_NAME_NO_TRIPULADA,
  GET__TRIPULADA,
  GET_NAME__TRIPULADA,
} from "../Action/type";

const initialState = {
  lanzaderas: [],
  noTripulada: [],
  tripulada: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LANZADERA:
      return {
        ...state,
        lanzaderas: action.payload,
      };
    case GET_NAME_LANZADERA:
      return {
        ...state,
        lanzaderas: action.payload,
      };
    case GET_NO_TRIPULADA:
      return {
        ...state,
        noTripulada: action.payload,
      };
    case GET_NAME_NO_TRIPULADA:
      return {
        ...state,
        noTripulada: action.payload,
      };
    case GET__TRIPULADA:
      return {
        ...state,
        tripulada: action.payload,
      };
    case GET_NAME__TRIPULADA:
      return {
        ...state,
        tripulada: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
