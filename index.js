require('dotenv').config(); //Importamos el paquete de dotenv y su función config() para que ésta tome nuestro archivo .env y así almacene nuestras variables de entorno creadas

const Server = require('./models/server'); //Importamos la clase Server con el require(path), lo he intendado con el import {} from ... pero me daba error

const server = new Server(); //Creamos nuevo objeto server y lo almacenamos en la const 'server'

server.listen(); //Llamamos al método listen() que será quien ejecute el server