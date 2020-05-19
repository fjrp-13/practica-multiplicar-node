// destructuración del objeto
const { crearArchivo } = require('./multiplicar/multiplicar');
// process es un objeto global de NodeJS
let argv = process.argv;

let parametro = argv[2];
let base = parametro.split('=')[1];

crearArchivo(base)
    .then((result) => {
        console.log(`Archivo creado: ${result}`);
    }).catch((err) => {
        console.log(err);
    });