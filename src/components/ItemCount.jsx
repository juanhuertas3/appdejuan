import react, {useState} from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "../context/CartContext";

const CartItem = ({Max_Permitido}) => {    
    const [Contador, SetContador] = useState(0)
    
    const handleClick = ()=>{
        if(Contador <= 4)
        SetContador(Contador +1);
  }
    const handleClick2 = ()=>{
        if(Contador >= 1)
        SetContador(Contador -1);
}
    const Terminarcompra = (children)=>{
        const [items, setItems] = useState([]);
    }

    return (
        <Cartcontext.Provider >
        <>

        <h5>Max permitado es: Max 5 unidades x producto</h5>
        <h5>Cuanto llevo en mi Carrito: {Contador}</h5><br></br>

        <button id="bottonincrementar" onClick={handleClick} max="5"><a className="waves-effect green darken-1 btn" ><i class="material-icons left">add_circle</i>Agregar elemento</a></button>
        
        <button onClick={handleClick2}><a className="waves-effect red darken-2 btn"><i className="material-icons right">remove_circle</i>Quitar Elemento</a></button> 
        
        <button onClick={Terminarcompra}><a className="waves-effect blue darken-2 btn">Terminar Mi compra</a></button>
           
        </>
        </Cartcontext.Provider>
        )
        }
    export default CartItem;