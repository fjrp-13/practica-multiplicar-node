const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        },
    })
    .command('crear', 'Crea un archivo de texto con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        },
    })
    .help()
    .argv;

// destructuración del objeto
const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando.toLowerCase()) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((result) => {
                console.log(`Archivo creado: ${result}`);
            }).catch((err) => {
                console.log(err);
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