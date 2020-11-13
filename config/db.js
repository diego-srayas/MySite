/*  Nombre del autor: Diego Manuel salas Rayas
    Fecha y hora: 10/101/2020 */
const mongoose = require("mongoose");
 
// Copia la URL del sitio de mongo DB
const MONGOURI = "mongodb+srv://mero:1234@cluster0.e35qo.mongodb.net/PROJECT0?retryWrites=true&w=majority";
const InitiateMongoServer = async() => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log("Conectado a la BD !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};
 //contraseña usuario=12345
module.exports = InitiateMongoServer;