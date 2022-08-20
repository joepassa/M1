'use strict'

function BinarioADecimal(num) {
  // tu codigo acá 
  num = num.split('').reverse();
  let nroDecimal = 0;
  for (let i = 0; i< num.length; i++){
    nroDecimal += Math.pow(2,i) * parseInt(num[i]);    
  }
  return nroDecimal
}

function DecimalABinario(num) {
  // tu codigo acá
  let binario = []
  while (num!=0){
    let divido = Math.floor(num/2)
    let resto = parseInt(num%2)
    num = divido;
    binario.push(resto);
  }
  return binario.reverse().join('')
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}