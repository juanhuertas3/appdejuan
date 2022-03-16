import React from "react";
import ItemDetail from "./ItemDetail";
import { collection, getDocs, doc, getDoc  } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../utils/firebase";

const getItems = ()=>{  
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

    return(
    <div>{ItemDetail}</div>
    )
}

export default getItems;