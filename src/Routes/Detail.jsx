import React, {useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [dentist, setDentist] = useState({});
  const params = useParams();
  console.log(params);

  //`https://jsonplaceholder.typicode.com/users`
  const url = `jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url)
      .then(({ data }) => {
        console.log("Data desde detail",data);
        setDentist(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
      <h1>Detail Dentist </h1>
      <div dangerouslySetInnerHTML={{ __html: dentist.data}}/>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail