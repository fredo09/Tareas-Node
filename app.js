/**
* App
*/
const argv = require('./config/yargs').argv;
const {crear} = require('./por-hacer/por-hacer');
const {getData} = require('./por-hacer/por-hacer');
const {actualizarData} = require('./por-hacer/por-hacer');
const {eliminar} = require('./por-hacer/por-hacer');

const colors = require('colors');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = crear(argv.description);
    console.log(tarea);
  break;
  case 'actualizar':
    let actualizar = actualizarData(argv.description, argv.completado);
    console.log(actualizar);
  break;
  case 'listar':
    let listarea = getData();
    console.log(listarea);
    for(let item of listarea){
      console.log('========Por Hacer======='.green);
      console.log('Descripción: ',item.desc);
      console.log('Estado: ',item.completado);
      console.log('========================\n'.green);
    }
  break;
  case 'borrar':
    let borrar = eliminar(argv.description);
    console.log(borrar);
  break;
  default:
    console.log('No existe ese comando');
}
