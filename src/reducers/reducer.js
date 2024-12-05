export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_DENTISTS":
            return { ...state, dentists: action.payload };
        case "ADD_FAVS":
            return { ...state, favs: [...state.favs, action.payload] };
        case "DELETE_FAV": 
            const filterFavs = state.favs.filter(
                (fav) => fav.id !== action.payload.id
            );
            return { ...state, favs: filterFavs };

        case "TOGGLE_THEME":
            return { ...state, theme: state.theme === "light" ? "dark" : "light" };
        
        default:
            throw new Error("Acción no existente");
    }
  };