

var estudiantes = ["Maria", "Sergio" , "Rosa", "Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

// for
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// for ... of

for (var estudiante of estudiantes){ // estudiantes hace referencia al arreglo, y estudiante es la variabel a la que se le va a asignar cada elemento del arreglo
    saludarEstudiantes(estudiante); // llamo a la funcion saludarEstudiantes y le asigno la variable estudiante, (estudiante vendria siendo la "i" en un for comun)
}

// While

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}