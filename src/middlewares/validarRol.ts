const validarRol= (req, res, next) => {
    if(req.headers.isadmin) {
        next();
    }else {
        res.status(401).send('No tiene autorización');
    }
}

export default validarRol;