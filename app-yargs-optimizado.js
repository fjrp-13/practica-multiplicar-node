const { argv } = require('./config/yargs');
const colors = require('colors/safe');

// destructuración del objeto
const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando.toLowerCase()) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((result) => {
                console.log(colors.green('================================'));
                console.log(colors.green(`Tabla del ${argv.base} - Límite ${argv.limite}`));
                console.log(colors.green('================================'));
                console.log(result);
            }).catch((err) => {
                console.log(err.red);
            });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((result) => {
                console.log('================================');
                console.log(`Archivo creado`, colors.green.underline(result));
                console.log('================================');
            }).catch((err) => {
                console.log(err.red);
            });
        break;
    default:
        console.log('comando no reconocido');
}

// process es un objeto global de NodeJS
//let argv2 = process.argv;
/*
let parametro = argv[2];
let base = parametro.split('=')[1];


    */