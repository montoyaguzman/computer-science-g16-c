/** Syntaxis de las funciones flecha
// Funcion flecha ordinaria (con muchos parametros y cuerpo)
(param1, param2, paramN) => { //cuerpo de la funcion }

// Funcion flecha con 1 solo param (no requiere parentesis en los parametros)
param1 => { //cuerpo de la funcion }

// Funcion flecha con una sola linea como retorno (no tiene cuerpo {})
(param1, param2, paramN) => // result

// Funcion flecha con 1 solo param y una sola linea como retorno (no tiene ni parantesis ni cuerpo)
param1 => //result

// Funcion flecha sin parametros
() => //result

*/

var autos = ['Lamborghini', 'McLaren', 'Maserati'];

// funcion anonima
/*autos.forEach( function(auto){
    console.log(auto);
});*/

// funcion flecha/arrow
/*autos.forEach( (auto) => {
    console.log(auto);
});*/

// funcion flecha/arrow
autos.forEach( auto => {
    console.log(auto);
});