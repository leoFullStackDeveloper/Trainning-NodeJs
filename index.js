const express = require("express");
const app = express();


const orders = [
    {
        id  :   "1",
        value:  100
    },
    {
        id  :   "2",
        value:  200
    }
]




// Ejemplo con ruta sin parámetros
// retorna info en json y ademas un mensaje
/* 
app.get('/orders', (req,res,next)=>{
    res.json(
        {
            data: orders,
            message: "Everything went right",
        }
    );
})
 */


 // Ejemplo de ruta con parámetros
// retorna info en json y ademas un mensaje
 
app.get('/orders/:id', (req,res,next)=>{
    
    res.status(200).json(
        {
            data: orders.find((order)=> order.id === req.params.id),
        }
        
    );
    console.log("id solicitado es " + req.params.id);
    
    
});
 
app.listen(3000,()=>{
    console.log("Server escuchando desde 3000");
})

app.get('/', (req,res,next)=>{
    res.send("Todo bien, aca funcionando desde el Backend");
})
