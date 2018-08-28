/**
* Logica de algo por hacer
*/

const fs = require('fs');

let listado = [];

//Lista y guerda la informacion de el json creado en el data.json
const listarDB = () => {
  let data = JSON.stringify(listado);
  fs.writeFile('./db/data.json', data , (err) =>{
    if(err){
      console.log(err);
      return;
    }
  });
}

const getData = () =>{
  cargar_db();
  return listado;
}

const cargar_db = () =>{
  try { //posible error
    listado = require('../db/data.json');
  } catch (e) {
    listado = [];
  }
}

//Crea y empuja la informacion en el arreglo de listado para luego guardarlo en data.json
const crear = (desc) => {
  cargar_db();
  let porHacer = {
    desc,
    completado: false
  }

  listado.push(porHacer);
  listarDB();
  return porHacer;
}

//Actualiza un tarea que este en el archivo json
const actualizarData = (desc,completado = true) => {
  cargar_db();
  let index = listado.findIndex(tarea => tarea.desc === desc);

  if(index >= 0){
    listado[index].completado = completado;
    listarDB();
    return true;
  }else {
    return false;
  }
}

//Elimina el dato en el data.json
const eliminar = (desc) => {
  cargar_db();
  let listado_nuevo = listado.filter(tarea =>{
    return tarea.desc !== desc //saca los elementos que no cumple la condicion
  })

  if(listado_nuevo.length === listado.length){
    return false;
  }else{
    listado = listado_nuevo;
    listarDB();
    return true;
  }
}


//Exportamos el modulo
module.exports = {
  crear,
  getData,
  actualizarData,
  eliminar
}
