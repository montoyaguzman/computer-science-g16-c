function createSuperHumano(superpoder, tipo, alias) {
    var superhumano = {
        superpoder: superpoder,
        tipo: tipo,
        alias: alias
    };
    return superhumano;
};

var flash = createSuperHumano("super velocidad", "super heroe", "flash");
var mujerMaravilla = createSuperHumano("super fuerza", "super heroe", "mujer maravilla");
console.log(flash);
console.log(mujerMaravilla);