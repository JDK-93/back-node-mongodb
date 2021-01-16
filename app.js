//Server
const express = require('express');
const logger = require('./src/util/logger')
const cors = require('cors');

app = express();
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT)
// Si hay puerto descripto por variable de entornos, usalo, en caso contrario, usa este!
//Middleware
app.use(cors()) //cada vez que llegue una petición al server, va a permitir, enviar y recibir datos
app.use(express.json()); //mi server entiende json
app.use(morgan('short', {
    stream: {
       write: message => logger.info(message.trim())
    }
}))

//Routes
app.use('/usuarios', require('./src/recursos/usuarios/usuarios.routes'))        // Usuarios Finales.
app.use('/admins', require('./src/recursos/admins/admins.routes'))              // Usuarios administradores.
app.use('/measure', require('./src/recursos/measure/measure.routes'))           // Usuarios administradores.
app.use('/temporales', require('./src/recursos/temporales/temporales.routes'))  // Usuarios administradores.

module.exports = app;
