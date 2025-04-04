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

    case "INCREMENT_LIKES":
      const newLikeCount = state.likesCount + 1;
      localStorage.setItem("likesCount", JSON.stringify(newLikeCount));
      return { ...state, likesCount: newLikeCount };

    case "DECREMENT_LIKES":
      const updatedLikeCount = Math.max(0, state.likesCount - 1);
      localStorage.setItem("likesCount", JSON.stringify(updatedLikeCount));
      return { ...state, likesCount: updatedLikeCount };

    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  // LocalStorage'dan saqlangan like sonini olish
  const storedLikesCount = JSON.parse(localStorage.getItem("likesCount")) || 0;

  const [state, dispatch] = useReducer(changeState, {
    LikedImages: [],
    likesCount: storedLikesCount, // Boshlang‘ich qiymatni localStorage'dan olish
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
