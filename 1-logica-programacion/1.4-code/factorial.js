var numero = window.prompt("¿De que cvalor necesitas el factorial?");
numero = parseInt(numero);
var factorial = 1;

if (numero === 0 || numero === 1) {
  factorial = 1;
} else {
  console.log('use while');
  while (numero != 0) {
    factorial = factorial * numero;
  	numero--;
  } 
}

console.log("El resultado del factorial es: ", factorial);