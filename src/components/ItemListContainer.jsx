import { render } from "@testing-library/react";
import react from "react";

const Saludo =({nombre, ciudad})=>{
    return(
        <div>
        <h3>Hola {nombre} un saludo de react 😁 desde {ciudad}</h3>
        </div>
    )
}

export default Saludo;