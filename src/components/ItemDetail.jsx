import React, { useEffect, useState } from "react";

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
            }, 3000);
        })
        promesa66.then(resultado =>{
        setUsuarios(resultado);            
        })
    },[item1])
    
    return (
    <>{
        usuarios.map((elemento)=>{
            return(
                <div>{elemento.id}, {elemento.titulo}, {elemento.descripcion}, {elemento.talla}, {elemento.precio}</div>
            )
        })
    }        
    </>)
    }

export default ItemDetail;