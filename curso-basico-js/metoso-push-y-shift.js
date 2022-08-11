/* El método .push() nos permite agregar uno o más elementos al final de un array.

A continuación veremos un ejemplo aplicado con un array que contiene números */

//Array inicial

let numArray = [1,2,3,4,5];

function newNum(){
    numArray.push(6,7) // al ejecutar se habran agregado al final del arreglo los numero 6, 7 ,   [1,2,3,4,5,6,7]
}

// Metodo shift, elimina el primer elemento del arreglo

// delcalramos un array en una variable

let array = [1,2,3,4,5]

let eliminarPrimeraPosicion = array.shift(); // en este caso el metodo shift esta eliminando la pocison 0 del array la cual contiene el numero 1, entonces al llamar de nuevo al array,
// se mostrara de la siguiente manera [2,3,4,5]