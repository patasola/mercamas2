import express from 'express';

const path = require('path');// para la carpeta de las rutas y evitar escrbir rutas todo debe ir dentro del proyecto
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Prueba del servidor');
});

app. listen(port, () => {
    return console.log(`servidor corriendo sobre el puerto ${port}`)
});
//conectar db
mongoose.connect('mongodb://localhost/Crud') // crea la base de datos en mongo toca mirar como subirla a heroku o algo por el estilo
.then(db => console.log('Base de datos conectada'))
.catch(error => console.log(error));


//importar routes o rutas
const indexRoutes = require('./routes/index');




//configuraciones 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views')); // sirve para decirle a la carpeta views esta dentro del proyecto
app.set('view engine', 'ejs'); // motor de plantilla  ejs, estilo flask en python pero este convierte el ejs en html



//middlewares es una funcion que se ejecuta antes de llegar a las rutas, esto es para morga
app.use(morgan('dev'));//para saber informacion entre el servidor y cliente, sirve para cuando tengamos muchas rutas y saber que esta pidiendo el cliente
app.use(express.urlencoded({extended: false})); // para pasar los datos en formato json, estilo al get y post


//routes
app.use('/', indexRoutes);


//iniciar el servidor 
app.listen(app.get('port'),()=>{  // corre con npm run dev para no andar frenando el servidor y los cambios
    //los haga automaticamente cuando estemos desarrollando, npm star es para iniciarlo normal
    //los cambios se hacen en el package.json
    console.log(`Server en el puerto ${app.get('port')}`);


});
