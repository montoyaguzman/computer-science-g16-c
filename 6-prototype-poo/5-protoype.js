function createPersona(name, altura, colorPiel) {
    this.name = name;
    this.altura = altura;
    this.colorPiel = colorPiel;
};

function createPanadero(isComerciante, hasMandil) {
    this.isComerciante = isComerciante;
    this.hasMandil = hasMandil;
};

function createSuperHumano(superpoder, tipo, alias) {
    this.superpoder = superpoder;
    this.tipo = tipo;
    this.alias = alias;
};

createSuperHumano.prototype.volar = () => {
    console.log('volar');
};

const flash = new createSuperHumano("super velocidad", "super heroe", "flash");
console.log(flash);
console.log(flash.volar());

/**  
 * El prototipo de un objeto se puede obtener con la propiedad historica __proto__
 * que es un getter/setter. Si se accede al constructor de la funcion constructora
 * tambien se puede obtener el prototipo.
*/
Object.getPrototypeOf(flash) === flash.__proto__ === createSuperHumano.constructor


/** 
 * Obtencion del nombre del constructor
*/
flash.constructor.name;

/**
 * Validar si un objeto tiene cierta propiedad
 */
flash.hasOwnProperty('alias'); // true
flash.hasOwnProperty('colorTraje'); // false

/**
 * Validar si un objeto esta usando cierto prototipo para su
 * construccion
 */
createSuperHumano.isPrototypeOf(flash); // true


