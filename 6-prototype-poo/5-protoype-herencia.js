function createSuperHumano(superpoder, tipo, alias, volar) {
    this.superpoder = superpoder;
    this.tipo = tipo;
    this.alias = alias;
    this.volar = volar
};

createSuperHumano.prototype.volar = () => {
    console.log('volar');
};

const flash = new createSuperHumano("super velocidad", "super heroe", "flash");
console.log(flash);
console.log(flash.volar());

// Object.getPrototypeOf(flash);=== flash.__proto__
// flash.constructor.name
// flash.__proto__ = createSuperHumano.constructor
// flash.hasOwnProperty('alias'); // true
// createSuperHumano.isPrototypeOf(flash); // true
// flash.hasOwnProperty('colorTraje'); // false
// Object.is(flash, mujerMaravilla); // false
// flash.toString();
// Object.getOwnPropertyNames(flash);
// Object.hasOwn(flash, 'volar');
