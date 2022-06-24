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

function createPanadero2(name, altura, colorPiel, isComerciante, hasMandil) {
    this.base = new createPersona(name, altura, colorPiel);
    this.isComerciante = isComerciante;
    this.hasMandil = hasMandil;
    Object.seal(this);
};
createPanadero2.prototype = new createPersona;

createPanadero.prototype.cocina = () => {
    console.log('El panadero con el pan :v');
};

function createSuperHumano(superpoder, tipo, alias) {
    this.superpoder = superpoder;
    this.tipo = tipo;
    this.alias = alias;
    this.__proto__ = createPersona
    Object.seal(this);
};

createSuperHumano.prototype.volar = () => {
    console.log('Soy superhumano y puedo volar');
};

const flash = new createSuperHumano("super velocidad", "super heroe", "flash");
console.log(flash);
console.log(flash.volar());

const personaGenerica = new createPersona("robot", 1.78, 'morena');
// const tinTanElPanadero = new createPanadero(true, true);
const tinTanElPanadero = new createPanadero2("tintan", 1.78, 'morena', true, true);

