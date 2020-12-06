

const mongoose = require('mongoose');


const dbConnect = async() => {
    try{
        await mongoose.connect(process.env.DB_BACKENDSERVER,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    });
    console.log("DataBase server is Running");
    }catch(err){
        console.log(err);
        throw new Error('Error, no se pudo establecer conexion con la base de datos');
    }
}
module.exports={
    dbConnect
}