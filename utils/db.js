const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;

//* Funcion que conecta nuestra base de datos a mongodb mediante mongoose
const connectDb = async () => {

    try {

        const db = await mongoose.connect(DB_URL, {

            useNewUrlParser: true,
            useUnifiedTopology: true
        
        });
        
        const { name, host } = db.connection;
        console.log(`Estás conectado a la base de datos: ${name} en el host: ${host}`);
        
    } catch (error) {
        
        console.log("No se ha podido conectar a la base de datos " + error);

    };

};

module.exports = connectDb;