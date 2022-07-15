import { GET_LANZADERA, GET_NAME_LANZADERA } from "../Action/type";

const initialState = {
  lanzaderas: [],
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

    default:
      return state;
  }
};

export default rootReducer;
