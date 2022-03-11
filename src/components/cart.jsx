import React from "react";
import { useCartContext } from "../context/CartContext";

const Cart = ({ items = [] }) =>{
    const {cartItems} = useCartContext()
    console.log(cartItems)
    return(
        <>
        {cartItems.lenght === 0 ? (
            <p>Carrito vacio</p>
        ) : (
            cartItems.map((i)=> {
                return (
                    <>
                    <p>
                        {i.title} x {i.cantidad}
                    </p>
                    
                    </>
                )
            })
        )

        }

        
        
        </>
    )
}