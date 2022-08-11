const cifra1 = document.querySelector('#cifra1');
const cifra2 = document.querySelector('#cifra2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');// aqui estamos llamando al parrafo donde vamos a escribir el resultado




function sumarCifras(){
    const resultado = Number(cifra1.value) + Number(cifra2.value); // hacemos la suma, pero antes convertimos los value en numeros , por que por defult los toma como string
    pResultado.innerText = "El resulatdo es: " + resultado; // escribirmos el resultado en el parrafo con innerText
}


// aunque esta forma de esuchar eventos en valida, es una bunea practica usar los addEventListener

// addEventListener

btn.addEventListener('click', sumarCifras);// aqui el addEventListener necesita dos parametros, el primero es el evento que quieres que esciche, en este caso en un click
// y el segundo argumento es la funcion que queremos ejecutar



// en formularios podemos usar event.preventDefult(); para evitar que recargue la pagina




