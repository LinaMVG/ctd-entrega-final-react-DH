import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const ContextGlobal = createContext();
const storageFavs = JSON.parse(localStorage.getItem("favs"));

const initialState = {
  dentists: [],
  favs: storageFavs || [],
  theme: "light"

};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    
    default:
      throw new Error("Acción no existente");
  }
};


const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = `https://jsonplaceholder.typicode.com/users`;

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME"});
  };

  useEffect(() => {
    axios(url).then((res) => {
      console.log("dentistas:: ",res.data);      
      dispatch({ type: "GET_DENTISTS", payload: res.data});
    })
    .catch((error) => {
      console.error("Error al obtener los dentistas:", error);
    });
  }, 
  []
);

useEffect(() => {
  localStorage.setItem("favs", JSON.stringify(state.favs));
}, [state]);

  return (
    <ContextGlobal.Provider value={{state, dispatch, toggleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal)
