const { Pool } = require('pg');

console.log(process.env.USER)

const pool = new Pool({
    user: "faniot",//process.env.USER,//"faniot", //process.env.PORT,//"faniot",
    host: process.env.HOST,  // Esto es para uso local, para un server, debería poner la IP del server??
    password:"faniot_1234", //process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

module.exports = pool
/*
const pool = new Pool({
    user: 'faniot',
    host: 'localhost',  // Esto es para uso local, para un server, debería poner la IP del server??
    password: 'faniot_1234',
    database: 'faniot',
    port: '5432'
});
*/