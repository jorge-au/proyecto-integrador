const express = require('express');

//nos permite hacer el ruteo, decir el recorrido que tiene que hacer al recibir una peticion
const routes = express.Router(); 

const {
    renderHome,
    getAllProducts,
    getForm,
    addNewProduct
} = require('../controllers/tiendaControllers');

routes.get('/', renderHome);

routes.get('/productos', getAllProducts);

routes.get('/nuevoProducto', getForm);

routes.post('/nuevoProducto', addNewProduct);

module.exports = routes;