import React from "react";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ dentist }) => {
  const { id, name, username } = dentist;
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <h1>{dentist.name}</h1>
        {dentist}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {/* <button onClick={addFav} className="favButton">Add fav</button> */}
    </div>
  );
};

export default Card;
