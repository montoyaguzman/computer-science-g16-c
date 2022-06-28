class Persona {

    constructor(name, altura, colorPiel) {
        this.name = name;
        this.altura = altura;
        this.colorPiel = colorPiel;
    }

    respirar() {
        console.log('Soy metodo de persona y respiro');
    };

    comer() {
        console.log('Soy metodo de persona y puedo comer');
    };
}

class SuperHumano extends Persona {
    constructor(name, altura, colorPiel, superpoder, tipo, alias) {
        super(name, altura, colorPiel);
        this.superpoder = superpoder;
        this.tipo = tipo;
        this.alias = alias;
    }
    volar() {
        console.log('Soy superhumano y puedo volar');
    }
}

class Panadero extends Persona {
    constructor(name, altura, colorPiel, isComerciante, hasMandil) {
        super(name, altura, colorPiel);
        this.isComerciante = isComerciante;
        this.hasMandil = hasMandil;
    }
    cocina() {
        console.log('El panadero con el pan :v');
    }
}

const flash = new SuperHumano('barry', '1.78', 'clara', "super velocidad", "super heroe", "flash");
const tinTan = new Panadero('tintan', '1.65', 'morena', true, true);
