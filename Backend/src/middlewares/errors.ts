const errorHandler = (error, req, res, next) => {
    console.log(error);
    const message = error.message  || error.sqlMessage;
    res.status(error.status || 500);
    res.json({message: message || 'internal server error'});
}

export default errorHandler;