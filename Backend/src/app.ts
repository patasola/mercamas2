import express from 'express';
import productosRoutes from './routes/productos';
import config from './config/config';
import tiendasRoutes from './routes/tiendas';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((_, res, next) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', '*');
res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
next();
});

productosRoutes(app);
tiendasRoutes(app);

app.get('/prueba', async(req, res, next) => {

    //ejemplos de arreglos - arrays

    const datos = {
        nombre: 'Gustavo',
        apellido: 'Moreno',
        genero: 'masculino'
    }

    const nuevosDatos = {
        ...datos,
        ciudad: 'Villavicencio',
        profesion: 'arquitecto',
        nombre: 'Alonso'
    }

    const {apellido, nombre} = datos;
    const arraynumeros = [5, 1, 20, 7, 2, 3, 4, 5, 6,]
    const mayor = Math.max(...arraynumeros);
    const nuevoarray = [...arraynumeros, 45, 50, 60, 70]
    res.status(200).json({mayor});


    //Ejemplo de promesa

    console.log('antes de la promesa');
    let x = 10;
    const promesa = new Promise((resolve, reject) => {
        if (x ==10) {
            resolve('promesa resuelta');    
        }else {
            reject('promesa rechazada');
        }
    });

    const response = await promesa.then().catch(() => {
        
    })

    console.log('despues de la promesa');
    res.status(200).json({nombre: "Gustavo"});

});

app.listen(config.PORT, () => {
    return console.log(`servidor corriendo sobre el puerto ${config.PORT}`)
});
