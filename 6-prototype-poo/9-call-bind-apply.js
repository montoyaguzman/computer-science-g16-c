 // Establecer this usando call
 function sayHello(anios) {
    this.anios = anios;
    console.log(`Mi nombre es ${this.name} y mi apellido es ${this.app} y tengo ${anios} años`)
}
const montoya = {
    name: 'jose',
    app: 'montoya',
    // sayhello: () => {}
    // sayhello: function() {}
};
// montoya.sayHello(); // error porque no esta definida en el objeto montoya
// const accion = person.sayHello
// accion() // this era window
sayHello.call(montoya, 28);

// Apply hace lo mismo que call pero requiere los parametros como un arreglo.
function walk(distance, direction) {
    console.log(`${this.name} caminó ${distance} metros hacia el ${direction}`)
}
const data = [800, 'sur'];
walk.apply(montoya, data);


// Bind
// Establecer this usando bind
const mimosa = {
    name: 'mimosa',
    app: 'cachorrita'
}
const mimosaSayHello = sayHello.bind(mimosa);
mimosaSayHello(2);


// Ejemplo práctico
{/* <button class="call-to-action">Hola 1</button>
<button class="call-to-action">Hola 2</button>
<button class="call-to-action">Hola 3</button> */}
const buttons = document.getElementsByClassName('call-to-action');
console.log('buttons:', buttons);

/*
buttons.forEach(button => {
  button.onclick = () => alert(button.textContent);
})
*/

Array.prototype.forEach.call(buttons, button => {
  button.onclick = () => alert(button.textContent);
})
