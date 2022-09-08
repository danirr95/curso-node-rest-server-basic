
// Desestrucutramos del paquete de express la función Router, esta función nos permite crear manejadores de rutas montables y modulares.
const { Router } = require('express');

// Desestructuramos del archivo de los controllers e importamos las funciones necesarias
const { userGet, userPut, userPost, userPatch, userDelete } = require('../controllers/users.controllers');

// Inicializamos la función Router() y la almacenamos en la constante 'router'
const router = Router();

// Declaramos cada método http necesario, indicando que sea ejecutado por nuestro router. Dicho router es un manejador que le indica a nuestra app que debe hacer cuando se solicite el recurso deseado. No le indicamos el path específico de la url, ya que eso se la indicamos cuando hagamos uso de dicho router fuera de este archivo (ya no indicamos '/saludo' sino '/'). También le pasamos por argumento la referencia del controller que contenga la función necesaria en cada caso, dicha función maneja la request y la response
router.get('/', userGet);

// En el caso del put, indicaremos que deseamos obtener el primer parámetro que es pasado en la url del sitio web, en este caso, será el id del usuario, lo indicamos de la siguiente forma :nombreVariable, siendo nombreVariable el nombre de la variable donde queremos almacenar nuestro dato obtenido
router.put('/:userID', userPut);

router.post('/', userPost);

router.patch('/', userPatch);

router.delete('/', userDelete);

// Exportamos el módulo de router (constante 'router')
module.exports = router;
