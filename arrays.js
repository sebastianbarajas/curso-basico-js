var frutas = ["Manzana", "Plátano", "Cereza", "Fresas"];

console.log(frutas);

console.log(frutas.length); // longitud o numero de elementos
console.log(frutas[n]); // acceder al elemento por medio de index

//Metodos para Mutar o alterar Array

var masFrutas = frutas.push("Uvas") //añadir elementos al final del array con el elemento .push
var ultimo = frutas.pop()//Eliminar el último elemento del Array con el metodo .pop
var nuevaLongitud = frutas.unshift("Uvas");//añadir elemento al inicio del array con el metodo .unshift
var borrarFruta = frutas.shift("Uvas");//Borrar elemento especifico con le metodo .shift
var posicion = frutas.indexOf("Cereza");// el metodo .indexOf Devuelve el index o posicion del elemento```