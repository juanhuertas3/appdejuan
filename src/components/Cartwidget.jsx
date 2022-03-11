import react from "react";
import { useContext } from "react/cjs/react.production.min";
import { CartContext } from "../context/CartContext";

const Carticon = ()=>{
    return(
        <>
        <span className="material-icons"><a href="/carrito"> shopping_cart </a></span>

        </>
    )
}

export default Carticon;