import React from "react";
import AgregarItem from "./ItemList";

const Itemlist =({nombre, ciudad})=>{
    return(
        <>
        <div>
        <h5>En consola se mostrara dentro de 2 segundos el item.js componente que muestra información de un producto, revisa la consola para saber cual es 🙈 </h5> 
        <AgregarItem/>
        </div>

        </>
    )
}

export default Itemlist;