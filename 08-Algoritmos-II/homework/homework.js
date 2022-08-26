'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }
  var pivot = array[0];
  var left = []; 
  var right = [];
  for (var i = 1; i < array.length; i++) {
    if(array[i] < pivot){
      left.push(array[i]);
    }else{
       right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));

}
function merge(left, right) {
  let arr = []
   while (left.length && right.length) {
      if (left[0] < right[0]) {
          arr.push(left.shift())  
      } else {
          arr.push(right.shift()) 
      }
  }
  return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
