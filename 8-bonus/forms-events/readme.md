#### Elementos de los formularios

* **Input:** Cajas de texto (hay de tipo text, number, color, email, password).
* **Checkbox:** Lista de elementos de multiselección.
* **Radio:** Lista de elementos de unica selección.
* **Select:** Caja desplegable o dropdown con lista de opciones.



#### Objetivo de los fomularios

Recuperar información que el usuario ingresa en la pantalla para utilizarla
en nuestra lógica de programación.

#### Pasos para obtener valores de los formularios

1. Que el elemento HTML tenga un ID.
2. Decidir si "lanzo" el evento con HTML o "lo escucho" con JS.
3. Obtiene el value del elemento HTML y hacen las accion que ustedes necesiten.

#### JS Nativo / Vainilla JS

1. getElement (getElementById, getElementByTagname, getElementByClassName) o querySelector.
   const element = document.getElementById('inputSearch');
   const element2 = document.querySelector('#inputSearch');
2. Eventos
   Escuchar acciones que el usuario hace pantallas
   Se usan en html como:
   `<button id="myButton" onclick="myFuncion"/>`
3. Listerners
   const button = document.querySelector('#myButton');
   button.addEventListerner('click' (event) => {
   // sentences
   })

#### EJEMPLO 1 CON HTML

<select name="cars" id="cars" onchange="myFunction()">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

function myFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}

#### EJEMPLO 2 CON JS

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

JS
const select = document.querySelector('#cars');
select.addEventListerner('change', (event) => {
    const val = event.target.value;
    if (val === 'legendary') {
        printBigCard();
    }
})


// Radio grupo 1: A, B, C LETRAS
// Radio grupo 2: 1, 2, 3 NUMEROS

const inputRadios = document.querySelectorAll('input[type=radio]');
inputRadios.addEventListener('click', () => {
    const typeRadio = e.target.name;
    switch (typeRadio) {
        case 'LETRAS':
            setValueLetra(e.target.value);
        break;
        case 'NUMEROS':
            setValueNumero(e.target.value);
        break;
    }
})