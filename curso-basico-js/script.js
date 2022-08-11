/* los querySelector son parecidos a los selectores de css
si necesitamos aceeder alguno, se puede llamar por su 
etiqueta, id o su clase, depeniendo como nos convenga */

const h1 = document.querySelector('h1'); // en este caso lo estamos llamando por su etiqueta, entonces nos a va a regresar el primer h1 del documento(selecciona a la primera etiqueta que hace referancia y no a todas las etiquetas que hacen referencia en le documento , para lograr eso se utiliza querySelectorAll)
const p = document.querySelector('p');// se esta llamando al elemento por su etiqueta (selecciona a la primera etiqueta que hace referancia y no a todas las etiquetas que hacen referencia en le documento , para lograr eso se utiliza querySelectorAll)
const parrafito = document.querySelector('.parrafito');// aqui estamos llamando al elemento por su clase
const pid = document.querySelector('#pid');// aqui llamamos al elemnto por su id
const input = document.querySelector('input'); //estamos llanado al elemento por su etiqueta (selecciona a la primera etiqueta que hace referancia y no a todas las etiquetas que hacen referencia en le documento , para lograr eso se utiliza querySelectorAll)

/* una manera de poder ver todas las propiedades de los elemtos declarados
anteriormente en la consola, se utiliza el consol.log pero las variables se meten 
como si fuerna unos objetos */

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
// tambien podemos acceder a un atributo especifico de un elemento con las funciones que nos trae JS

console.log(input.value);

// o si queremos que solo nos traiga al elemento, como tal se pone de manera directa el nombre de la variable donde se guardo el elemento

console.log(h1);


// como escribir html desde JavaScript

h1.innerHTML = "se cambio <br> el titulo";// con esta propiedad podemos agregae codigo html al elemento que le indicamos 
h1.innerText = "se cambio <br> el titulo";// con esta propiedad se escribe solo texto, no te lo interpreta como codigo(es una manera de protegerenos de ataques, de que ingresen codigo malisioso a nuestra pagina)

// para acceder y ver los atributos de un elemento se utiliza .getAttribute, en este caso se metera en un console.log para poder verlo

console.log(h1.getAttribute('pantalla'));
// para poder modificar los atrubutos de una clase se utiliza .setAttribute()
 h1.setAttribute('class','rojo'); // en el primer parammetro se pone el nombre del atributo que queremos modificar, y en el segundo parametro, el nuevo valor que le queremos asignar al atributo


 // igual existe un parametro para agregar classes directamente que es:

 h1.classList.add('rojo');

 // y tambien para elimiar clases

 h1.classList.remove('verde');

 //h1.classList.toggle('verde'); //esta clase nos sirve para agregarla clase si es que aun no la tiene el elemento, o eliminarla si es que y la tiene

 //h1.classList.contains('verde');  // esta nos devuelve TRUE o FALSE dependiendo si tiene o no la clase 


 //////////////////////////

 /*para poder crear un elemento html se utiliza  document.createElement();  , y dentro del parentecis se pone el elemento qu queremos crear, e este caso una imagen */

const img = document.createElement('img');// aqui estamos creando el elemento img

/*loque sigue es setear la direcion de la imagen, en este caso se puede hacer de dos maneras */
//img.src("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png");
img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png');

/*ahora lo que falta es agregarla a un elemento ya existente de html en este caso usaremos al parrafo con el id #pid */

pid.append(img); // el append nos permite agregar el elemneto despues del parrafo ya existente

//pid.replaceWith(img); // con replaceWith podemos remplazar el elemento existente y en su lugar colocar el nuevo elemento 