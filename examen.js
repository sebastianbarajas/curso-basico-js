/* Convierte el siguiente código en una función, pero,
 cambiando cuando sea necesario las variables constantes por parámetros
  y argumentos en una función: */

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

// resultado 

var name ="sebastian";
var lastname = "barajas";
var nickname = "sebas";

function dime (name,lastname,nickname){
    let completeName = name + " " + lastname;

    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}`);
}

////////////////////////////////////////////////////////////////////////

/*  Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
es una manera de tomar deciciones dentro del codigo
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
if, if else, switch, while
¿Puedo combinar funciones y condicionales?
    si es posible 

    Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

    const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
*/

var ExpertPlus = false;
var Expert = true;
var Basic = false;
var Free = false;

if(ExpertPlus){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else if(Expert){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(Basic){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(Free){
    console.log("Solo puedes tomar los cursos gratis");
}

/* 
 Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
*/
 if(ExpertPlus){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
if(Expert){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if(Basic){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if(Free){
    console.log("Solo puedes tomar los cursos gratis");
}
💡 
/*Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏 */

var suscripcion = [
    {plan: "ExpertPlus", descripcion: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"},
    {plan: "Expert", descripcion: "Puedes tomar casi todos los cursos de Platzi durante un año"},
    {plan: "Basic", descripcion: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {plan: "Free", descripcion: "Solo puedes tomar los cursos gratis"},
];

var i;

if(i != null){
    console.log(suscripcion[i]);
}

/*  Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
es una seccion de codigo que se repetira hasta que se cumpla una condicion
¿Qué tipos de ciclos existen en JavaScript?
for, for..of, while
¿Qué es un ciclo infinito y por qué es un problema?
un ciclo infinito es cunado la condiciones que se establecio para que el ciclo pare, nunca llegara, 
esto es un problema por que satura la memoria del sistema y hace que el programa colapse 
¿Puedo mezclar ciclos y condicionales?
 si es posible 
*/

/* Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
     for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
*/
i=0;

while(i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

x=10;
while(x >= 2){
    console.log("El valor de i es: " + x);
    x--;
}

/* 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript. */

var respuesta;
while (respuesta != 4){
    respuesta = prompt("¿cuanto es 2 + 2?");
    if(respuesta != 4){
        alert("lo siento haz fallado, intenta de nuevo.");
    }else if(respuesta == 4){
        alert("felicidaes tu respuesta es correcta");
       }
}

/* Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
    es una manera de guardar los datos de forma ordenada en una matriz
¿Qué es un objeto?
    es una manera ordenada de guardar info, un objeto puede almacenar diferentes propiedades
¿Cuándo es mejor usar objetos o arrays?
 un objeto se utiliza cuaando una sola cosa contiene multiples propiedades, y un arreglo se usa para agrupar
 diferentes cosas de una sola tematica
¿Puedo mezclar arrays con objetos o incluso objetos con arrays? 
    si es posible
*/

/* Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. */

var arra1 = [1,2,3,4,5];
var arra2 = [6,7,8,9];

function primerParametro(array){
    console.log(`el primer parametro del array es ${array[0]}`);
};

/*
Crea una función que pueda recibir cualquier array como parámetro 
e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

*/

var arra1 = [1,2,3,4,5];
var arra2 = [6,7,8,9];

function mostrarParametros(array){
    for(i=0; i < array.length; i++){
        console.log(`el parametro numero ${i} del array es ${array[i]}`);
    }
    
};

/* Crea una función que pueda recibir cualquier objeto como parámetro
 e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo). */