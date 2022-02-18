import react, {useState} from "react";

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

    return (
        <react.Fragment>                    
        <h4>Se nos ha solicitado crear un contador que incremente o reduzca la cantidad segun el boton donde se de click vamos a ello:</h4><br></br>
        <h5>La cantidad max permitada es de: {Max_Permitido}</h5> <br></br>
        <h5>Cuanto llevo en mi Carrito: {Contador}</h5><br></br>

        <button id="bottonincrementar" onClick={handleClick} max="5"><a class="waves-effect green darken-1 btn" ><i class="material-icons left">add_circle</i>Agregar elemento</a></button>
        <button onClick={handleClick2}><a class="waves-effect red darken-2 btn"><i class="material-icons right">remove_circle</i>Quitar Elemento</a></button>
        </react.Fragment>)
        }
    export default CartItem;