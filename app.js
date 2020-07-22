const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea un archivo con los parametros especificados', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

// console.log('Limite', argv.limite);

let comando = argv._[0];

switch (comando) {

    case 'listar':

        listarTabla(argv.base, argv.limite)
            .then(listado => console.log(`${ listado }`))
            .catch(e => console.log(e));
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}