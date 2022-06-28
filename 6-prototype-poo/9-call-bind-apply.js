 // 1. call: Ejecutar una funcion con un this en especifico
 function sayHello(anios) {
    this.anios = anios;
    console.log(`Mi nombre es ${this.name} y mi apellido es ${this.app} y tengo ${anios} años. Tiene ${noMascotas} mascotas`)
}
const montoya = {
    name: 'jose',
    app: 'montoya',
};
// montoya.sayHello(); // error porque no esta definida en el objeto montoya
// const accion = person.sayHello
// accion() // this era window
sayHello.call(montoya);

// 2. apply: hace lo mismo que call pero requiere los parametros como un arreglo.
function walk(distance, direction) {
    console.log(`${this.name} caminó ${distance} metros hacia el ${direction}`)
}
const data = [800, 'sur'];
walk.apply(montoya, data);


// 3. Bind: Generar una nueva funcion que tenga el nuevo contexto this.
const mimosa = {
    name: 'mimosa',
    app: 'cachorrita'
}
const mimosaSayHello = sayHello.bind(mimosa);
mimosaSayHello(2);

