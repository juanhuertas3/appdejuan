import React, { createContext, useContext, useState } from "react";
import CartItem from "../components/ItemCount";
import Itemlist from "../components/ItemListContainer";

export const CartContext = createContext();

export const useCartContext = ()=> useContext(CartContext);

export const CartProvider = ({children})=>{
    const [cartItems, setcartItems] = useState ([])
    const [cartCount, setCartCount] = useState(0)
    
    const addItems =(item, cantidad) => {
        setcartItems([...cartItems, {...item, cantidad} ])
        setCartCount(prev=> prev + cantidad)

    }

    return(
        <CartContext.Provider value={[cartCount, cartItems, addItems]}> {children} </CartContext.Provider>
    )

}