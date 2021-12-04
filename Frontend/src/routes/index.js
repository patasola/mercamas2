const express = require('express');
const router = express.Router();

const Producto =require('../models/producto'); 

router.get('/modificarp', async (req,res) =>{ //ejs donde se muestra en tabla los productos de la DB y hacer RUD
  const productos = await Producto.find(); 
  res.render('modificarp',{
    productos
  });
});

router.post('/agregar', async (req,res) => {  // async es para realizar eventos de manera asincrona para uno usar promesas o colbats
  console.log(new Producto(req.body));//mostrar por consola
  const producto=new Producto(req.body);// para crear un objeto y recibir lo que se imprimio por consola 
  await producto.save();//para guardar
  res.redirect('/Paginap')
});

router.get('/Eliminar/:id',async (req,res)=>{ //  se coloca el id para sacar el _id objectID 
  const { id }= req.params;
  console.log(req.params); // para imprimir por consola y saber el id que tiene en mongo db el campo a eliminar
  await Producto.remove({_id: id});//la forma mas facil de remover de la base de datos 
  res.redirect('/modificarp')

});

router.get('/editar/:id',async (req,res)=>{ // pagina para editar 
 const { id }=req.params;
 const producto = await Producto.findById(id);
 res.render('editar',{
  producto 
 });
});

router.post('/editar/:id', async(req,res)=>{ // pagina para ediar productos y que se redirecciona luego del cambio a la pagina princiapl
  const { id }=req.params;
  await Producto.update({_id: id}, req.body)
  res.redirect('/Paginap')

});




router.get('/registrop',(req,res)=>{ // ruta para el ejs que recibe los donde se Crean los productos y se guardan en la DB 
  res.render('registrop');


});

router.get('/Paginap',(req,res)=>{// pagina principal 
res.render('Paginap')


});

module.exports = router;
