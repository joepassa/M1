"use strict";

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}


BinarySearchTree.prototype.insert = function(value){
    if(value > this.value){
      if(this.right !== null){
        this.right.insert(value); // recursion
      }else{
        this.right = new BinarySearchTree(value);
      }      
    }
    if(value < this.value){
      if(this.left !== null){
        this.left.insert(value); // recursion
      }else{
        this.left = new BinarySearchTree(value);
      }     
    }
};

BinarySearchTree.prototype.contains = function(value){
    if(this.value === value) return true;
    
    if(this.right){
      if(this.right.contains(value)){
        return true;
      }
    }
    if(this.left){
      if(this.left.contains(value)){
        return true;
      }
    }

    return false;
};

BinarySearchTree.prototype.depthFirstForEach = function(f, order){
  if(order === 'pre-order'){
    f(this.value);
    if(this.left !== null) this.left.depthFirstForEach(f, order);
    if(this.right !== null) this.right.depthFirstForEach(f, order);
  }
  else if(order === 'post-order'){
    if(this.left !== null) this.left.depthFirstForEach(f, order);
    if(this.right !== null) this.right.depthFirstForEach(f, order);
    f(this.value);
  }else{
    if(this.left !== null) this.left.depthFirstForEach(f, order);
    f(this.value);
    if(this.right !== null) this.right.depthFirstForEach(f, order);
  }
};
BinarySearchTree.prototype.breadthFirstForEach = function(f, array=[]){
    if(this.left !== null){
      array.push(this.left);
    }
    if(this.right !== null){
      array.push(this.right);
    }
    f(this.value);
    if(array.length > 0){
      array.shift().breadthFirstForEach(f, array);
    }
};
BinarySearchTree.prototype.size = function(){
    if(this.right === null && this.left === null) return 1;
    if(this.left !== null && this.right === null) return 1 + this.left.size();
    if(this.right !== null && this.left === null) return 1 + this.right.size();
    if(this.right !== null && this.left !== null) return 1 + this.left.size() + this.right.size();    
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
