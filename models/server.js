//Métodos de petición http -> https://developer.mozilla.org/es/docs/Web/HTTP/Methods

//Importamos express
const express = require('express')

//Importamos el paquete CORS, que utilizamos para proteger nuestra API Rest de aceesos externos no autorizados por ejemplo, entre otras funciones de protección
const cors = require('cors');

class Server {

    constructor() {

        //Iniciamos la app de express
        this.app = express();

        //Declaramos el puerto que vamos a usar, en este caso, será un puerto traído desde nuestras variables de entorno
        this.port = process.env.PORT

        //Declaramos el path utilizado para invocar nuestra ruta
        this.usersPath = '/api/user'

        // Iniciamos el método middlewares() que contiene las middlewares
        this.middlewares();

        // Iniciamos el método routes() que contiene las rutas de mi app
        this.routes();
    }

    middlewares() {

        // Hacemos la invocación de CORS gracas a una middleware
        this.app.use(cors());

        // Hacemos la lectura y parseo del body de la petición http gracias a una middleware y la función .json() de nuestra app de express
        this.app.use(express.json());

        // Realizamos la invocación del directorio público de la web gracias a la middleware 'use()', a ésta le pasamos por argumento la invocación de la función 'static()' de nuestra aplicación express (la app de express es almacenada en la constante 'express' en la línea 4), dicha función serves static files.
        this.app.use(express.static('public'));
    }

    routes() {

        // Utilizamos una middleware, en este caso use(), para hacer uso de las rutas declaradas en nuestro archivo user.routes.js. Le pasamos por argumento el path de destino que queremos usar para nuestra ruta, y la importación del archivo que necesitemos donde esté declarado nuestro manejador router
        this.app.use(this.usersPath , require('../routes/user.routes'));

    }

    listen() {

        /*Ejecutamos el servidor en el puerto especificado en nuestras variables de entorno con 'process.env.PORT'
        
            -> The process.env property returns an object containing the user environment
        */
        this.app.listen(this.port, () => {
            console.log('Running proces on port ', this.port);
        });

    }

};

//Exportamos la clase creada con module.exports (así lo he tenido que hacer en Node, ya que el export{} me daba error)
module.exports = Server;