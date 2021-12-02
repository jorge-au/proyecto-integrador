const express = require('express');
const databaseConnection = require('../../config/database');
const database = require('../../config/database');

const renderHome = ( req, res)=>{
    databaseConnection.query('SELECT*FROM categorias',(error, data)=>{ //hablando a la base de datos,pidiendo la informacion
        if(error){
            console.log(error);
        }else{
            res.render('pages/index',{
                data
            });//mande esa informacion al archivo index para nostrarlo al sitio
        }
    });  
};

const getAllProducts = (req, res)=>{

    databaseConnection.query('SELECT * FROM productos', (error, data)=>{
        if(error){
            console.log(error);
        }else{
            res.render('pages/productos', {data});
        }
    });
};

const getForm = (req, res)=>{
    res.render('pages/formulario')
};
// const addNewProduct = (req, res)=>{
//     const {producto, categoria, }= req.body{
//         databaseConnection.qu
//     }
// }
module.exports = {
    renderHome,
    getAllProducts,
    getForm
};