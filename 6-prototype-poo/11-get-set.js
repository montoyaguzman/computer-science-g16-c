/**
 * Los getters y setters son funciones especiales con las que
 * podemos asignar y obtener los valores de los atributos,
 * esto obedece al principio de ocultamiento de JS.
 * JavaScript nos ofrece esta posibilidad mediante los keywords get y set
 */

 class People {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}

const sensei = new People('Jose Montoya');
console.log(sensei.name);
sensei.name = 'victor';
console.log(sensei);

/**
 * Como puede oobservar get y set se llaman como propiedades
 * y no como metodos (no llevan () ), esto hace que sea 
 * intuitivo cuando usar un set (recibe y establece valores) 
 * y cuando un get (retorna el valor).
 */