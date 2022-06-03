var numero = window.prompt("¿De que cvalor necesitas el factorial?");
numero = parseInt(numero);
var factorial = 1;

while (numero != 0 && numero !== 1) {
    console.log('use el while');
    factorial = factorial * numero;
    numero--;
}

console.log("El resultado del factorial es: ", factorial);