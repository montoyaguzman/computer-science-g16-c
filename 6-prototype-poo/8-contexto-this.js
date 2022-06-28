// Ejemplo global
console.log(this); // window

// Ejemplo en una funcion
function sayHello() {
    console.log('Hola yo soy: ', this);
}
// Ejemplo en una funcion en modo estricto
function sayHello() {
    'use strict';
    console.log('Hola yo soy: ', this);
}

// This en objetos y asignacion sobre una variable
const person = {
    name: 'José',
    sayHello: function() {
        console.log(`Hola soy ${this.name}`)
        console.log('this:', this);
    }
}
person.sayHello();
const accion = person.sayHello();
accion();

// JS ES 5
// 'use strict'
// ES6-ESn
// TS  
