// declarativas

    function miFuncion(){
        return 3;
    }

    // asi se manda a llamar una funcion declarativa    
    miFuncion(); // aqui se llama a la funcion atravez del nombre de la funcion
// Expresion 

var miFuncion = function(a,b){ // a y b son parametros que la funcion esta esperando recibir
    return a + b;
}
    
    // asi se manda a llamar una funcion de exprecion 
    miFuncion();// aqui se llama a la funcion atravez del nombre de la variable
    // para darle los parametros a la funcion se hace de la siguiente manera
    miFuncion(4,5); //los parametros se ponen en el parentesis


    // vamos a crear una plantilla de cadena de texto,
    //esto es para que si necesitamos que se muestren varias veces los datos
    // lo podamos hacer de manera automatica y tengamos que de clararlo uno por uno 

    function saludarEstudiantes(estudiante){
        console.log(`Hola ${estudiante}`);
    }

    // como obtener un valor de una funcion sin el conslo.log,
    //esto se hace atravez de return ejemplo;

    function suma(a,b){
        var resultado = a + b;
        return resultado;
    }
    // tambien se puede escibir de la siguinte manera
    function suma(a,b){
        return resultado;
    }

    // la difecrencia entre las funciones delcarativas y las de exprexion es que:
    //La funcion delcarativa: podemos mandar llamar la función antes de que ésta sea declarada
    //La exprecion de funcion: tendríamos que declararla primero, y después mandarla llamar.