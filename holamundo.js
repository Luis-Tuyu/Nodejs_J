console.log("hola mundo desde node");

function mostrar(callback) {
    console.log("estas entradno a un callback")
    callback();
}


mostrar(function() {
    console.log("definiendo un callback");
});
console.log("final");

var name = 'luis';
let name_2 = '3';

var i = 'hola';
for (var i = 0; i < 3; i++) {
    i += 1;
}
console.log(i);

let n = 'luis'
let n2 = 'tuyu'
console.log(`${n}, ${n2}`)

let persona = {
    nombre: 'luis',
    apellido: 'tuyu'
}
let { nombre, apellido } = persona
console.log(nombre, apellido)
    //funciones flecha
let functionF = (a, b) => {
        return a + b
    }
    //solo sirve para devolver un solo dato
let functionFF = (a, b) => a + b
    //practicando el callback


function emprender(callback) {
    let emprendedor = {

        nombre: 'luis',
        idea: 'camiones',
        utilidadades: 4000
    }

    callback(emprendedor);
}

emprender(function(response) {
    if (response.utilidadades > 300) {
        console.log("tus utilidades son mayores");
        console.log(`Felicidades ${response.nombre}, tus utilidades son mayores`);
    }
});

//funciones flecha, lo que vimos en la clase pasada
function getUsuarios(id, callbacks) {
    usuario = {
        id,
        nombre: 'Luis',
        apellido: 'Medina'
    }
    callbacks(usuario)
}

getUsuarios(10, (response) => {
    console.log(`El id es:  ${ response.id } El nombre es: ${response.nombre}`);
})

//jugando con las funciones dejs
console.log("Iniciando la practica de node.js");
let uno;

function accion() {
    uno = 'dato';
    console.log(uno)
}

accion();
console.log("imprimiendo variable", uno);

for (var a = 0; a < 10; a++) {
    console.log(a);
}

console.log("variale a: ", a);