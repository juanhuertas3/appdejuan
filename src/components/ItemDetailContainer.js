import React from "react";
import ItemDetail from "./ItemDetail";
import { collection, getDocs, doc, getDoc, Timestamp, addDoc  } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../utils/firebase";
import { async } from "@firebase/util";

const GetItems = ()=>{  

    const carrito = [
        {
            item:{
                id:1,
                title: 'Camisa de dragonball Z para la oficina',
                precio: 180
            },
            quantity: 3
        },

        {
            item:{
                id:2,
                title: 'Sudadera de Caballeros de Zodiaco para el Gym',
                precio: 400
            },
            quantity: 4
        },

        {
            item:{
                id:3,
                title: 'Traje de agente 007 para toda ocasion',
                precio: 900
            },
            quantity: 2
        },
        
    ]

    useEffect(()=>{
        const getData = async()=>{
            const query = collection(db, 'productos');
            const response = await getDocs(query);
            const data = response.docs.map(doc=>doc.data());
            console.log('data', data);
            const queryDoc = doc(db, 'productos', 
            '1lJbttVgzT9cQeUntnkw');
            const responseDoc = await getDoc(queryDoc);
            const dataDoc = responseDoc.data();
            console.log('dataDoc', dataDoc);
        }
        getData();
    }, [])

    const sendOrder = async(e)=>{
        e.preventDefault();
        console.log(e)
        const order = {
            buyer: {
                name: e.target[0].value,
                email:"sebhu3@mimail.com",
                phone:3145654342
            },
            items: carrito,
            total: carrito.reduce((accu,i)=>(accu+(i.item.precio * i.quantity)), 0)
        }
        order.date = Timestamp.fromDate(new Date());
        const queryColecction = collection(db, 'orders');
        const docRef = await addDoc(queryColecction, order);
    }

    return(
    <div>
        {ItemDetail}
        <form onSubmit={sendOrder}>
            <input type="text" placeholder="Nombre"/>
            <button type="submit">Enviar</button>

        </form>
    </div>
    )
}

export default GetItems;