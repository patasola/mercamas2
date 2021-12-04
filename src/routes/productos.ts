import { Router } from "express";
import { actualizarProducto, agregarProducto, eliminarProducto, obtenerProducto, obtenerProductos } from "../Controllers/ProductosController";
import errorHandler from "../middlewares/errors";
import validarRol from "../middlewares/validarRol";

const productosRoutes = (app) => {
    const router = Router();
    app.use('/', router)

    //middlewares
    // router.use(validarRol);

    router.get('/obtenerProductos', obtenerProductos);
    router.get('/obtenerProducto/:id', obtenerProducto);
    router.post('/agregarProducto', agregarProducto);
    router.put('/actualizarProducto/:id',  actualizarProducto);
    router.delete('/eliminarProducto/:id', eliminarProducto);

    //next - middlewares
    router.use(errorHandler);
}

export default productosRoutes;