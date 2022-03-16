import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { db } from "../utils/firebase";
import AgregarItem from "./ItemList";

const Itemlist =({nombre, ciudad})=>{
   const getData = async ()=>{
       try{
           const document = collection(db, "productos")
           const col = await getDocs(document)
           const result = col.docs.map((doc)=>{
           })
        
        }
   catch (error){
       console.warn("error", error)
   }
    } 
    
    
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