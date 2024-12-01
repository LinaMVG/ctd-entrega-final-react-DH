import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
// import { reducer } from "../../reducers/reducer";

//export const initialState = {theme: "", data: []}

const ContextGlobal = createContext();

const initialState = {
  dentists: [],
  theme: "light"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    // case "ADD_CART":
    //   return { ...state, cart: [...state.cart, action.payload] };
    default:
      throw new Error("Acción no existente");
  }
};


const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const url = `https://jsonplaceholder.typicode.com/users`;

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  useEffect(() => {
    axios(url).then((res) => {
      console.log("dentistas:: ",res.data);      
      dispatch({ type: "GET_DENTISTS", payload: res.data});
      // setRecipes(res.data.recipes);
    })
    .catch((error) => {
      console.error("Error al obtener los dentistas:", error);
    });
  }, 
  []
);

  return (
    <ContextGlobal.Provider value={{state, toggleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal)
