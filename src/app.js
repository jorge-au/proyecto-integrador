const express = require('express');
const app = express();
const routes = require('./routes/tiendaRoutes');
const path = require('path');
const databaseConnection = require('../config/database');
const port = process.env.PORT || 4000;

//connection con MYSQL
databaseConnection.connect();

//vamos a recibir info en formato JSON
app.use(express.json());
app.use(express.urlencoded({extended:false}));//con esta linea de codigo decimos q vamos a recibir informacion en modo objetos.


//uso de EJS y de archivos PUBLICOS
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

//rutas
app.use('',routes);





/************************************************************** */
app.listen(port,()=>{
    console.log(`Server corriendo en el puerto ${port}`);
});