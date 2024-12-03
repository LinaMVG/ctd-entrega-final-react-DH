import React from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link, useLocation } from "react-router-dom";



const Card = ({ dentist }) => {
   const { id, name, username } = dentist;
   const {dispatch} = useContextGlobal()
  //  const location = useLocation(); //Herramienta que uso para saber en que página se renderiza la card
  // console.log("location", location);

  const addFav = (dentist)=>{
      dispatch({
        type: "ADD_FAVS",
        payload: dentist,
      })
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <img
        src="public\images\doctor.jpg"
        alt="Doctor"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />

      <Link to={`/detail/${id}`}>
        <h1>{dentist.name}</h1>
      </Link>
      

      <p>{dentist.username}</p>
     
      <button onClick={()=>{addFav(dentist)}} className="favButton">Add fav</button>
     
    </div>
  );
};

export default Card;
