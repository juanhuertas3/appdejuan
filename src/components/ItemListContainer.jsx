import React from "react";
import lapromesa from "./item";

const Saludo =({nombre, ciudad})=>{
    return(
        <React.Fragment>
        <div>
        <h3>Hola {nombre} un saludo de react 😁 desde {ciudad}</h3>
        </div>
        <div>
        <h5>En consola se mostrara dentro de 2 segundos el item.js componente que muestra información de un producto, revisa la consola para saber cual es 🙈 </h5> 
        <lapromesa/>
        </div>

        </React.Fragment>
    )
}

export default Saludo;