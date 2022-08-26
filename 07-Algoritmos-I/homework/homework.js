'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
  let n = 2;
  while(num > 1){
    if (num % n === 0){    
      array.push(n);
      num = num/n;
    }else{
      n++
    }
  }
  return array;
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;
  let aux = 0;
  while(swap){
    swap = false;
    for (let i=0; i<array.length; i++){
        if(array[i]>array[i+1]){
          aux = array[i];
          array[i]=array[i+1];
          array[i+1]=aux;
          swap = true;  
        }
    }
  }
  
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let previo = i-1; 
      while ((previo > -1) && (current < array[previo])) {
          array[previo+1] = array[previo];
          previo--;
      }
      array[previo+1] = current;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
 
  let aux = 0;      
  for(let i = 0; i < array.length; i++) {
      let menor = i;
      for(let j = i+1; j < array.length; j++){
          if(array[j] < array[menor]) {
              menor=j; 
          }
       }
       if (menor != i) {
           aux = array[i]; 
           array[i] = array[menor];
           array[menor] = aux;      
      }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
