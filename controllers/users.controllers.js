// Desestructuramos e importamos todas las funciones y propiedades de una response para poder utilizarlas, ya que al no declarar ninguna petición como tal, no nos detecta las responses para poder sugerirnos los métodos y propiedades de éstas
const { request, response } = require('express');

// Almacenamos en constantes las distintas funciones manejadoras de cada request y response respectivas. El 'response' indicado es el mismo que hemos desestructurado al principio
const userGet = (request, response) => {

    // Desestructuramos las querys que necesitemos de la url, estas querys las obtenemos de la propiedad query de la request, gracias a la desestrucutración, podemos asignarle un valor por defecto a aquellos datos que no nos sean pasados
    const { page, apellido = "No last name" } = request.query;

    response.json({
        msg: 'get API',
        page,
        apellido
    })
};

const userPut = (request, response) => {

    // ALmacenamos en una constante el dato obtenido de la url de la web, en concreto de userID. Esto lo hacemos indicando que deseamos obtener de los parámetros (params) de la request (request), la variable creada (userID)
    const id = request.params.userID;

    response.json({
        msg: 'put API',
        id
    })
};

const userPost = (request, response) => {

    // Almacenamos en la constante 'body' todo el body de la petición http realizada por el user
    const { edad } = req.body;

    response.json({
        msg: 'post API',
        edad
    })
};

const userPatch = (request, response) => {
    response.json({
        msg: 'patch API'
    })
};

const userDelete = (request, response) => {
    response.json({
        msg: 'delete API'
    })
};

// Exportamos las constantes que contienen las funciones creadas 
module.exports = {
    userGet,
    userPut,
    userPost,
    userPatch,
    userDelete
}