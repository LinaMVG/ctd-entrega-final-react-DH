import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducers/reducer";

const ContextGlobal = createContext();
const storageFavs = JSON.parse(localStorage.getItem("favs"));
const storageTheme = JSON.parse(localStorage.getItem("theme"));

const initialState = {
  dentists: [],
  favs: storageFavs || [],
  theme: storageTheme || "light",
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
  localStorage.setItem("theme", JSON.stringify(state.theme));
}, [state]);

  return (
    <ContextGlobal.Provider value={{state, dispatch, toggleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal)
