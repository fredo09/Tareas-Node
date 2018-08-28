/**
 * Configurando Yargs
 */
 const description = {
     demand:true,
     alias: 'd',
     desc: 'Descripcion de tarea de algo por hacer'
 };

 const completado = {
   alias:'c',
   desc: 'Marca como completado algo por hacer',
   default:true
 }

 const argv = require('yargs')
       .command('crear','Crea algo por Hacer', {
         description
       })
       .command('borrar', 'Borra la tarea ya creada', {
         description
       })
       .command('actualizar', 'Actualiza El estado completo de algo por hacer', {
         description,
         completado
       }).help().argv;

module.exports = {
  argv
}
