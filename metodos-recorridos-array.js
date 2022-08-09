// el siguinte es un Array con objetos dentro de el 
var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "tv", costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "audifonos", costo: 3000},
];

//metodo Filter

var articulosFiltrados = articulos.filter(function(articulo){ // .filter es el metodo
    return articulo.costo <= 500 // aqui el metodo junto con la funcion me esta filtrado los articulos que su costo se <= a 500
});

//metodo map, crea un nuevo array

var nombreArticulos = articulos.map(function(articulo){ // aqui atravez del metodo map, le estoy diceindo que recorra todo el arreglo 
    return articulo.nombre // y me regrese la propiedad nombre atravez de la funcion que esta dentro de el metodo map
});

// Metodo find, el metodo fine nos regresa true o false, va a detectar si existe o no lo que le estamos pasando

var encuentraArticulo = articulos.find(function(articulo){ // aqui el metodo fine nos va a traer el articulo con Nombre "Laptop" en el caso de que exista
    return articulo.nombre === "Laptop"
});

encuentraArticulo; // al consultarlo nos genera un nuevo array con la informacion debida

// Metodo foreach, este metodo no modifica ni genera un nuevo array, siplemente filtra el array original sin modificarlo
articulos.forEach(function(articulo){// como foreach no genera un nuevo articulo  se llama directamente al arreglo y se usa el metodo forEach
    console.log(articulo.nombre);
});

//Metodo some, nos regresa un valor true o false, para los objetos que cumplan esa validacion, este genera un nuevo array

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700; // esta consulta regreara el valor TRUE, por que si existe objetos que cumplan con la condicion 
});