const mysql = require('mysql2');

const databaseConnection = mysql.createConnection({
    host: 'bs1cmckbwoajbdez1t2h-mysql.services.clever-cloud.com',
    user: 'u8qe3aqnp4eugj8t',
    database: 'bs1cmckbwoajbdez1t2h',
    password: '1vDytqXKTbNpKyZi0yOJ'
});

    databaseConnection.connect((error)=>{
        if(error){
            console.log(error);
        }else{
            console.log("Servidor conectado a MYSQL");
        }
});

module.exports = databaseConnection;