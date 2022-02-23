import Articulo from "./item"
import React, { useEffect, useState } from 'react';

const Agregaritem = ()=>{
    const[Productos, setProductos] = useState([]);
  
    useEffect (()=>{
    const promesa3 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      resolve(Articulo)
    }, 3000);
    
  })

  promesa3.then (resultado=>{
    console.log('resultado', resultado)
    setProductos (resultado)
  })
}, [Articulo])

  return (
    <>
    <div>  
      {
      Articulo.map((elementos)=>{
        return ( 
        <div> 
          id={elementos.id}<br></br> 
          Nombre={elementos.titulo}<br></br> 
          descripcion = {elementos.descripcion}<br></br> 
          precio={elementos.precio}<br></br> 
          Talla={elementos.talla}<br></br></div>
        )
      } )

    })
    </div>
    </>
);
}  

export default Agregaritem;