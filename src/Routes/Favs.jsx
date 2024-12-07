import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const {state} = useContextGlobal();
  
  return (
    <div className="home">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((dentist) =>(
          <Card key={dentist.id} dentist={dentist}/>
        ))}
      </div>
    </div>
  );
};

export default Favs;
