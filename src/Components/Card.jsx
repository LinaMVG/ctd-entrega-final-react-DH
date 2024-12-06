import React from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link, useLocation } from "react-router-dom";
import CardStyles from "../styles/Card.module.css";



const Card = ({ dentist }) => {
   const { id, name, username } = dentist;
   const { dispatch, state:{favs}} = useContextGlobal()
   const location = useLocation(); //Herramienta que uso para saber en que página se renderiza la card
  // console.log("location", location);
  
  const findFav = favs.find((fav) => fav.id === dentist.id);
  
  const addFav = (dentist)=>{
    // const isFavorite = favs.some(fav => fav.id === dentist.id);
    // console.log(dentist.id);
    if (findFav) {
      alert("Dentist is already in favs")
    } else {
      dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAVS", payload: dentist });
      alert("Dentist added")
    }
  }

  const removeFav = (dentist) => {
    if (findFav) {
      dispatch({ type: "DELETE_FAV", payload: dentist });
      alert("Dentist removed from favorites");
    }
  };

  const showDeleteButton = location.pathname === "/favs"; 
  const handleButtonClick = () => {
    if (location.pathname === "/favs") {
       removeFav(dentist);
    } else {
       addFav(dentist);
    }
 };

  return (
    <div className={CardStyles.cardContainer}>
      

      <Link to={`/detail/${id}`}>
      <img
        src="/images/doctor.jpg"
        alt="Doctor"
        // style={{ width: "100px", height: "100px", borderRadius: "50%" }} 
        />
        <h3>{dentist.name}</h3>
        <p>{dentist.username}</p>
      </Link>
      
      <button
            onClick={handleButtonClick}
            className="favButton"
         >
            {showDeleteButton ? "Delete" : "Add fav"}
      </button>
     
    </div>
  );
};

export default Card;
