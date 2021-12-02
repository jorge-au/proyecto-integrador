const express = require('express');

const routes = express.Router(); //nos permite hacer el ruteo, decir el recorrido al recibir una peticion

// routes.get('/',);

const {
    renderHome,
    getAllProducts,
    getForm
} = require('../controllers/tiendaControllers');

routes.get('/', renderHome);

routes.get('/productos', getAllProducts);

routes.get('/nuevoProducto', getForm);

module.exports = routes;