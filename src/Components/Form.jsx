import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user,setUser] = useState({
    nombre: "",
    email: ""
  })

  // const [show,setShow] = useState(false)
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
      // setShow(true)
      setError(false)
      setSuccessMessage(`Gracias ${user.nombre}, te contactaremos cuando antes via email`)
      console.log("Usuario guardado con los datos:", { Nombre: user.nombre, Email: user.email });

      
    }

  }

  
  return (
    <div>
     <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" onChange={(event) =>
          setUser({...user,nombre: event.target.value})
        } 
        />
        <input type="email" placeholder="Email" onChange={(event)=>
          setUser({...user, email: event.target.value})
        } />
        <button>Submit</button>
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
