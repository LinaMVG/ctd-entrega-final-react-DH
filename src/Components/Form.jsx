import React, { useState } from "react";
import FormStyles from "../Styles/Form.module.css";

const Form = () => {

  const [user,setUser] = useState({
    nombre: "",
    email: "",
    pregunta: ""
  })

  const [error,setError] = useState(false)
  const [errorMessage,setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("");


  const handleSubmit = (event)=>{
    event.preventDefault();
    const regexString= /[a-zA-ZáÁ]$/;
    const regexEmail=/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (user.nombre.trim().length <=5) {
      setError(true)
      setErrorMessage("El nombre debe tener más de 5 carácteres")
    }
    else if (!regexString.test(user.nombre)) {
      setError(true)
      setErrorMessage("Este campo solo permite letras")
    }
    else if (!regexEmail.test(user.email)) {
      setError(true)
      setErrorMessage("Email inválido")
    }

    else {
      setError(false)
      setSuccessMessage(`Gracias ${user.nombre}, te contactaremos cuanto antes via email`)
      console.log("Usuario guardado con los datos:", { Nombre: user.nombre, Email: user.email, Pregunta:user.pregunta});
    }

  }

  
  return (
    <div>
     <form onSubmit={handleSubmit}>
      <div className={FormStyles.formContainer}>
      <input type="text" placeholder="Nombre" onChange={(event) =>
          setUser({...user,nombre: event.target.value})
        } 
        />
        <input type="email" placeholder="Email" onChange={(event)=>
          setUser({...user, email: event.target.value})
        } />
        <textarea type="text" placeholder="Escribe tus preguntas aquí..." onChange={(event)=>
          setUser({...user, pregunta: event.target.value})
        } />
        <button>Submit</button>

      </div >
        
      </form>
      {error ? (
      <h4 style={{ color: "red" }}>
        {errorMessage}
      </h4>
    ) : <h4>{successMessage}</h4>}
    </div>
  );
};

export default Form;
