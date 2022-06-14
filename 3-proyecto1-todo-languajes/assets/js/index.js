// const ulElement = document.getElementById('list-languages');
// getElementById
// getElementByClassName
// getElementByTagName
const ulElement = document.querySelector('#list-languages');
const formElement = document.querySelector('#language-form');
let languages = [];
// id => #
// class => .
// tag => nameTag

formElement.addEventListener('submit', (event) => {
    // evitar que el formulario se envie por defecto
    event.preventDefault();

    // obtener los elementos html
    const languageInputElement = event.target.languageElement;
    const radiosNodeList = event.target.statusRadioElement;
    const statusElement = Array.from(radiosNodeList).find(element => element.checked);

    // obtener los value de los elementos html
    const languageText = languageInputElement.value;
    const statusText = statusElement.value;

    const language = {
        description: languageText,
        status: statusText,
    };
    languages.push(language);
    renderListLanguages(languages);
});

const renderListLanguages = (languages) => {
    languages.forEach(renderElementList);
};

const renderElementList = () => {
    // creación de los elementos HTML
    const liElement = document.createElement('li');
    const divElement = document.createElement('div');
    const iElement = document.createElement('i');
    const buttonElement = document.createElement('button');
    // agregar las clases css a los elementos 
    liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    // agregar tipo de icono
    setIconType();
    buttonElement.classList.add('bi', 'bi-trash3-fill', 'text-danger');
    buttonElement.setAttribute('type', 'submit');
    buttonElement.setAttribute('index', '0');
    // agregar texto a un elemento
    liElement.innerHTML = 'Lenguaje ejemplo';
    // agregar al html
    ulElement.appendChild(liElement);
    liElement.appendChild(divElement);
    divElement.appendChild(iElement);
    divElement.appendChild(buttonElement);
};

const setIconType = () => {

};


