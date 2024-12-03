import React, {useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [dentist, setDentist] = useState({});
  const params = useParams();


  //`https://jsonplaceholder.typicode.com/users`
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res);
        
        console.log("Data desde detail",res.data);
        setDentist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
      <h1>Detail Dentist{dentist.id}</h1>
      <table>
      <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Sitio Web</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
       </table>
    </>
  )
}

export default Detail