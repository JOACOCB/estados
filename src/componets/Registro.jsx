import { useState } from "react" ;
import Formulario from "./Formulario";
import  Alert  from "./Alert"

import React from 'react'

const Registro = () => {
    const [errores, setErrores] = useState ({
    error: "",
    color: "",
    
   })





  return (
    <div>
    <Formulario  setErrores= {setErrores}/>
    <Alert mensaje={errores.error}/>
    
    </div>
    
  );
};

export default Registro