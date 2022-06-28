/** 
 * Problema
 * Imprimir los numeros pares del 1-20,
 * exceptuando el 18.
*/

/**
 * while
// do - while
// for
// partes de un ciclo
  * inicio, condicion, razon de cambio
 */


var i = 0; // inicio
while (i <= 20) { // condicion
  // console.log('numero: ' + i);
  if (i % 2 === 0 && i !== 18) {
    console.log('numero: ', i); 
  }
  // razon de cambio
  // i = i + 1; 
  // i += 1; // operador de asignacion suma
  i++; // operador de incremento
}

/*
18
'18'
== // compara valores
=== // compara tipo de dato
*/


// for (inicio; condicion; razonCambio) {
for (var j = 0; j <= 20; j++) {
    if (j % 2 === 0 && j !== 18) {
        console.log('numero for: ', j); 
    }
    // es donde se ejecuta la razon de cambio
}

// inicio
var k = 0;
do {
  if (k % 2 === 0 && k !== 18) {
    console.log('numero doWhile: ', k); 
  }
  // razon de cambio
  k++;
} while(k <= 20) // condicion


// inicio
var posicion = 0;
var valor = 0;
var arr = [0, 2, 4, 6, 8, 10];
do {
  console.log('numero:', arr[posicion]);
  posicion++;
} while (posicion < arr.length && valor !== 0) 

// inicio
var k = 0;
do {
  console.log('entrando...'); 
  if (k % 2 === 0 && k !== 18) {
    console.log('numero doWhile: ', k); 
  }
  // razon de cambio
  k++;
} while(k <= 20) // condicion
// La instrucción estaba antes de hacer de la comparación, 
// por eso imprimió todas las veces, tanto cuando era 
// para como cuando era impar

// Tipado fuerte vs tipado debil
// int numero = 7; vs var numero = 7;
// String numero = "jose"; vs var numero = "jose";

