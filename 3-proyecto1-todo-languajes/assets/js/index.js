// const ulElement = document.getElementById('list-languages');
// getElementById
// getElementByClassName
// getElementByTagName
const STATUS = {
    STAND_BY: 'standBy',
    START: 'start',
    FINISHED: 'finished'
};
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
    // const radioList =  Array.from(radiosNodeList);
    // const statusElement = radioList.find(element => element.checked);

    // obtener los value de los elementos html
    const languageText = languageInputElement.value;
    const statusText = statusElement.value;

    const language = {
        description: languageText,
        status: statusText,
    };
    languages.push(language);
    cleanView();
    renderListLanguages(languages);
});

const cleanView = () => {
    ulElement.innerHTML = '';
}

const renderListLanguages = (languages) => {
    languages.forEach(renderElementList);
};

const renderElementList = (element, index) => {
    // creación de los elementos HTML
    const liElement = document.createElement('li');
    const divElement = document.createElement('div');
    const iElement = document.createElement('i');
    const buttonElement = document.createElement('button');
    // agregar las clases css a los elementos 
    liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    // agregar tipo de icono
    setIconType(iElement, element.status);
    buttonElement.classList.add('bi', 'bi-trash3-fill', 'text-danger');
    buttonElement.setAttribute('type', 'submit');
    buttonElement.setAttribute('index', index);
    // agregar texto a un elemento
    liElement.innerHTML = element.description;
    // agregar al html
    ulElement.appendChild(liElement);
    liElement.appendChild(divElement);
    divElement.appendChild(iElement);
    divElement.appendChild(buttonElement);
};

const setIconType = (iElement, status) => {
    const { STAND_BY, START, FINISHED } = STATUS;
    iElement.classList.add('bi', 'bi-pause-circle-fill');
    if (status === STAND_BY) {
        iElement.classList.add('text-warning');
    } else if (status === START) {
        iElement.classList.add('text-primary');
    } else if (status === FINISHED) {
        iElement.classList.add('text-success');
    }
};


