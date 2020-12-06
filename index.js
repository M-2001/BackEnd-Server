
require('dotenv').config();
const express = require('express');

const cors = require('cors')

const {dbConnect} = require('./db/config');

const app = express();


//configuracion de CORS

app.use(cors());
//conneccion a la base de datos
dbConnect();

function server(){
    console.log("Server is running " + process.env.PORT);
}

//rutas
app.get("/",(req, res)=>{
    res.json({
        ok : true,
        msj: 'Hola mundo',
    });
})
//crear un servidor con express 
app.listen(process.env.PORT, ()=>{
    server()
});


