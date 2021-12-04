import executeQuery from "../services/mysql.service";

const agregarTienda = async (req, res, next) => {

    //Lógica de la función
    const {nombre, direccion, telefono, ids} = req.body;
    try{
        const response =  await executeQuery(`INSERT INTO tiendas (nombre, direccion, telefono) VALUES ('${nombre}', '${direccion}', '${telefono}')`);

        //ids.forEach(id => {
        //    executeQuery(`INSERT INTO usuarios (idProductos, idTienda) VALUE ('${id}', '${response.insertId}')`);
        //
        //});
        //console.log(response);
        res.status(201).json({message: 'created', id: response.insertId});
    }catch(error){
        next(error);
    }
    
}

const agregarProductoATienda = async (req, res, next) => {

    //Lógica de la función
    const {idProductos} = req.query;
    try{
        const response =  await executeQuery(`INSERT INTO tiendas (idproductos) VALUES ('${idProductos}')`);
        res.status(201).json({message: 'created', id: response.insertId});
    }catch(error){
        next(error);
    }
    
}