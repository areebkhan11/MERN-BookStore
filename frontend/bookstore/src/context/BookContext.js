import { createContext, useReducer } from "react";

export const BookContext = createContext();

export let booksReducer = (state, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        books: action.payload,
      };
    case "CREATE_BOOKS":
      return {
        books: [action.payload, ...state.books],
      };
      default:
          return state
  }
};

export const BookContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(booksReducer, {
      books: null
    });

  return  (
     <BookContext.Provider value={{...state, dispatch}}>
        {children}
    </BookContext.Provider>
    )
};
