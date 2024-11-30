import React from "react";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ dentist }) => {
  // const { id, name, username } = dentist;
  // const addFav = ()=>{
  //   // Aqui iria la logica para agregar la Card en el localStorage
  // }

  return (
    <div className="card">
      <img
        src="public\images\doctor.jpg"
        alt="Doctor"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h1>{dentist.name}</h1>
      <p>{dentist.username}</p>
      <p>{dentist.id}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {/* <button onClick={addFav} className="favButton">Add fav</button> */}
    </div>
  );
};

export default Card;
