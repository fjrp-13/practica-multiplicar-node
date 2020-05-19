// const multiplicar = require('./multiplicar/multiplicar');

// destructuración del objeto

const { crearArchivo } = require('./multiplicar/multiplicar');
let base = '2';

crearArchivo(base)
    .then((result) => {
        console.log(`Archivo creado: ${result}`);
    }).catch((err) => {
        console.log(err);
    });