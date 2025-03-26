import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LIKE":
   
      if (!state.LikedImages.some((image) => image.id === payload.id)) {
        return {
          ...state,
          LikedImages: [...state.LikedImages, payload],
        };
      }
      return state;

    case "UNLIKE":
      return {
        ...state,
        LikedImages: state.LikedImages.filter((image) => image.id !== payload.id),
      };

    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    LikedImages: [],
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}


GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContextProvider;
