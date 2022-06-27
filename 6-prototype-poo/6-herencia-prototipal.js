function createPersona(name, altura, colorPiel) {
    this.name = name;
    this.altura = altura;
    this.colorPiel = colorPiel;
};

createPersona.prototype.respirar = () => {
    console.log('Soy metodo de persona y respiro');
};

createPersona.prototype.comer = () => {
    console.log('Soy metodo de persona y puedo comer');
};

function createPanadero(isComerciante, hasMandil) {
    this.isComerciante = isComerciante;
    this.hasMandil = hasMandil;
};

createPanadero.prototype.cocina = () => {
    console.log('El panadero con el pan :v');
};

function createSuperHumano(superpoder, tipo, alias) {
    this.superpoder = superpoder;
    this.tipo = tipo;
    this.alias = alias;
};

createSuperHumano.prototype.volar = () => {
    console.log('Soy superhumano y puedo volar');
};

const personaGenerica = new createPersona('robot', 1.78, 'morena');
console.log(flash);



