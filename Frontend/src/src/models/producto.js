const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const productoSchema= new Schema({
    
    nombre: String,
    categoria: String,
    cantidad: Number,
    descripcion: String,
    precio: Number
});

module.exports = mongoose.model('productos',productoSchema);