import react from "react";

const Producto = [
    {id:"camisa-hombre"},
    {titulo:"camisa de seda para hombre"},
    {descripcion:"Camisa de seda de excelente calidad, con estampado personalizado en multiples colores"},
    {talla:"s, m, l, xl"},
    {precio:"desde $50.000"},
]

const promesa = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve(Producto)
    }, 2000)
})

promesa.then(resultado=>{
    console.log(resultado)
    return resultado
}, error=>{
    console.log('Error', error)
})

export default promesa;