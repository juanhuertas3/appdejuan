import react from "react";
import promesa from "./item";

const Saludo =({nombre, ciudad})=>{
    return(
        <react.Fragment>
        <div>
        <h3>Hola {nombre} un saludo de react 😁 desde {ciudad}</h3>
        </div>
        <div>
        <h5>En consola se mostrara dentro de 2 segundos el item.js componente que muestra información de un producto, revisa la consola para saber cual es 🙈 </h5> 
        </div>

        </react.Fragment>
    )
}

export default Saludo;