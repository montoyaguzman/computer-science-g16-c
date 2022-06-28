// Ejemplo práctico

const buttons = document.getElementsByClassName('call-to-action');
console.log('buttons:', buttons);

/*
buttons.forEach(button => {
  button.onclick = () => alert(button.textContent);
})
*/
Array.prototype.forEach.call(buttons, button => {
  button.onclick = () => alert(button.textContent);
})