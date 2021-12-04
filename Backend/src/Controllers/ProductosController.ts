import { response } from "express";
import executeQuery from "../services/mysql.service"

const obtenerProductos = async (req, res, next) => {

    //Lógica de la función

    try {
        const response = await executeQuery('SELECT * FROM productos');
        const data= {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response : null
        }
        res.json(data);
    }catch(error){
        next(error);
    }
}

const obtenerProducto = (req, res, next) => {

    //Lógica de la función

    const {id} = req.params;
    executeQuery(`SELECT * FROM productos WHERE nombre = ${id}`).then((response) => {
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response[0] : null
        }
        res.json(data);
    }).catch((error) => {
        next(error);

    });
}

const agregarProducto = async (req, res, next) => {

    //Lógica de la función
    const {nombre, cantidad, categoria, descripcion, foto, valor} = req.body;
    try{
        const response =  await executeQuery(`INSERT INTO productos (nombre, cantidad, categoria, descripcion, foto, valor) VALUES ('${nombre}', '${cantidad}', '${categoria}', '${descripcion}', '${foto}', '${valor}')`);
        console.log(response);
        res.status(201).json({message: 'created', id: response.insertId});
    }catch(error){
        next(error);
    }
}

const actualizarProducto = async (req, res, next) => {

    //Lógica de la función

    const {nombre, cantidad, categoria, descripcion, foto, valor} = req.body;
    try{
        const response =  await executeQuery(`UPDATE productos SET nombre = '${nombre}', cantidad = '${cantidad}', categoria = '${categoria}', descripcion = '${descripcion}', foto = '${foto}', valor = '${valor}' WHERE id = ${req.params.id}`);
        console.log(response);
        if (response.affectedRows > 0){
            res.json({message: 'updated'});
        }else{
            res.status(404).json({message: `No existe registro con id: ${req.params.id}`});
        }
    }catch(error){
        next(error);

    }
}

const eliminarProducto = async (req, res, next) => {

    //Lógica de la función
    try{
        const response = await executeQuery(`DELETE FROM productos WHERE id = ${req.params.id}`);
        console.log(response);
        if (response.affectedRows > 0){
            res.json({message: 'deleted'});
        }else{
            res.status(404).json({message: `No existe registro con id: ${req.params.id}`});
        }
    }catch(error){
        next(error);
    }
}

export {obtenerProductos, obtenerProducto, agregarProducto, actualizarProducto, eliminarProducto}
