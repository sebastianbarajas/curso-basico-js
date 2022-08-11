var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`); // en este caso this hace referencia la nombre del objeto, entonces en esta linea de codigo cuando se escribe this.modelo equivale a miAuto.modelo
    }
};

miAuto.detallesDelAuto(); // asi se ingresa al metodo de un objeto

// para acceder a un valor del objeto se hace atraves del nombre de objeto punto y el nombre de la palabra clave

miAuto.marca

//metodo de objeto
/* un metodo de objeto es agregarle una funcion a una propiedad del objeto

*/

// funcion Constructora

function auto(marca, modelo, annio){ // en auto metemos las propiedades que esoeramos que el objeto tenga
    this.marca = marca;   // en este caso this hace referencia a mi funcion contructora y a la palabra clave marca le asignamos al parametro marca, y esto hace que haga referencia a la propiedad del objeto
    this.modelo = modelo;
    this.annio = annio;
}

// para crear un objeto nuevo con relacion al template, primero se crea una variable 

var autoNuevo = new auto("Tesla", "Model 3", 2020); // aqui utilizamos el operado "new", lo que hace que se genere una nueva instancia de nuestra funcion contructora "auto"
                                                //una instancia es un objeto que deriva de otro objeto
autoNuevo



