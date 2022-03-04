import React, { useEffect, useState } from "react";
import CartItem from "./ItemCount"; 

function ItemDetail (){
    const [usuarios, setUsuarios] = useState([]);   
    const item1 = [
        {id:"20225434", 
        titulo:"camisa de seda para hombre", 
        descripcion:"Camisa de seda de excelente calidad, con estampado personalizado en multiples colores", 
        talla:"s, m, l, xl", 
        precio:"desde $50.000"},
    ]
    
    useEffect(()=>{
        const promesa66 = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(item1)
            }, 2000);
        })
        promesa66.then(resultado =>{
        setUsuarios(resultado);            
        })
    },[item1])
    
    return (
    <>
    
    {
        usuarios.map((elemento)=>{
            return(
                <div>
                <strong>ID= {elemento.id},</strong><br></br> 
                <strong>Nombre= {elemento.titulo},</strong><br></br> 
                <strong>Descripción= {elemento.descripcion},</strong><br></br> 
                <strong>Talla= {elemento.talla}, </strong><br></br> 
                <strong>Precio= {elemento.precio}</strong>
                </div>
            )
            
        },
        
     )
    } 
    <CartItem />        
    
    </>)
    }

export default ItemDetail;