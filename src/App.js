import React, { Fragment, useState } from "react";
import Header from "./components/Header.js";
import Formulario from "./components/Formulario.js"
import Mensaje from "./components/Mensaje.js";
import Resultado from "./components/Resultado.js";
import Spinner from "./components/Spinner.js";

function App() {

  //Definir el state
const [cantidad, guardarCantidad]=useState(0);
const [plazo, guardarPlazo]=useState('');
const [total, guardarTotal]=useState(0);
const [cargando, guardarCargando]= useState(false);

let componente;

if(cargando){
  componente = <Spinner />
}
else if(total=== 0){
  componente = <Mensaje />
}else {
  componente = <Resultado 
  total = {total}
  cantidad = {cantidad}
  plazo = {plazo}/>
  
}

  return (
    <Fragment>
      <Header 
        titulo='Cotizador de Prestamos'  
      />

      <div className="container">
       <Formulario 
       cantidad= {cantidad}
       guardarCantidad = {guardarCantidad}
       plazo = {plazo}
       guardarPlazo = {guardarPlazo}
       
       guardarTotal = {guardarTotal}
       guardarCargando ={guardarCargando}
       />


        <div className="mensajes">
         {componente}
        </div>
       
      </div>
    </Fragment>
  );
}

export default App;
