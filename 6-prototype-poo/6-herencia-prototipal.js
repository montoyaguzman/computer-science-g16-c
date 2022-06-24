function createPersona(name, altura, colorPiel) {
    this.name = name;
    this.altura = altura;
    this.colorPiel = colorPiel;
    Object.seal(this);
};

createPersona.prototype.respirar = () => {
    console.log('Soy metodo de persona y respiro');
};

createPersona.prototype.comer = () => {
    console.log('Soy metodo de persona y puedo comer');
};

function createPanadero(name, altura, colorPiel, isComerciante, hasMandil) {
    this.__proto__ = new createPersona(name, altura, colorPiel);
    this.isComerciante = isComerciante;
    this.hasMandil = hasMandil;
    Object.seal(this);
};

createPanadero.prototype.cocina = () => {
    console.log('El panadero con el pan :v');
};

function createSuperHumano(name, altura, colorPiel, superpoder, tipo, alias) {
    this.__proto__ = new createPersona(name, altura, colorPiel);
    this.superpoder = superpoder;
    this.tipo = tipo;
    this.alias = alias;
};

createSuperHumano.prototype.volar = () => {
    console.log('Soy superhumano y puedo volar');
};

// const flash = new createSuperHumano("super velocidad", "super heroe", "flash");
const flash = new createSuperHumano("barry", 1.78, "clara", "super velocidad", "super heroe", "flash");
console.log(flash);
console.log(flash.volar());

const personaGenerica = new createPersona("robot", 1.78, 'morena');
// const tinTanElPanadero = new createPanadero(true, true);
const tinTanElPanadero = new createPanadero("tintan", 1.78, 'morena', true, true);

