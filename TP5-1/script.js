//Actividad 1


var correo;
var contraseña;
var confirmarCorreo;
var confirmarContraseña;

correo = prompt('ingrese su correo');
contraseña = prompt('ingrese su contraseña');
confirmarCorreo = prompt('vuelva a ingresar su correo')
confirmarContraseña = prompt('vuelva a ingresar su contraseña')

if ((correo === confirmarCorreo) && (contraseña === confirmarContraseña)) {

    alert('Datos válidos. Iniciando sesion...')

} else {

    alert('Su correo o contraseña es incorrecto, inténtelo nuevamente')
}


// Actividad 2

var añoDeNac;
var mayorDeEdad;
var remeraRoja;

añoDeNac = parseInt (prompt('ingrese su año de nacimiento'))
var mayorDeEdad = 2004;
var remeraRoja = true;

if ((añoDeNac <= mayorDeEdad) && (remeraRoja == true)){
    alert('¡Bienvenido!')
} else {
    alert('No cumple con los requisitos para ingresar')
}


// Actividad 3

var nota1;
var nota2;
var promedio;

nota1 = parseFloat (prompt('Ingrese la primer calificación'));
nota2 = parseFloat (prompt('Ingrese la segunda calificación'));

promedio = ((nota1 + nota2)/2);
console.log(`La calificación promedio es ${promedio}`);

if (promedio > 7) {
    alert("Materia aprobada");
} else {
    alert("Materia reprobada");
}


