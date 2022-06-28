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
    if (!languageInputElement?.value || !statusElement?.value) {
        return;
    }
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
    renderTotal();
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
    buttonElement.addEventListener('click', handleDelete);
    // agregar texto a un elemento
    liElement.innerHTML = element.description;
    // agregar al html
    ulElement.appendChild(liElement);
    liElement.appendChild(divElement);
    divElement.appendChild(iElement);
    divElement.appendChild(buttonElement);
};

const setIconType = (iElement, status) => {
    // const STAND_BY = STATUS.STAND_BY;
    // const START = STATUS.START;
    // const FINISHED = STATUS.FINISHED;
    // destructuring
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

const handleDelete = (event) => {
    const positionStr = event.target.getAttribute('index'); // user getAttribute for custom attributes
    const position = parseInt(positionStr);
    languages.splice(position, 1);
    cleanView();
    renderListLanguages(languages);
    renderTotal();
}

const renderTotal = () => {
    const totalElement = document.querySelector('#language-all');
    const completeElement = document.querySelector('#language-complete');
    const pendingElement = document.querySelector('#language-pending');
    totalElement.innerHTML = languages.length;
    completeElement.innerHTML = getTotalComplete(languages);
    pendingElement.innerHTML = getTotalPendings(languages);
}

const getTotalComplete = (languages) => {
    const { FINISHED } =  STATUS;
    const completeds = languages.filter(element => element.status === FINISHED);
    return completeds.length;
}

const getTotalPendings = (languages) => {
    const { STAND_BY, START } =  STATUS;
    const completeds = languages.filter(element => element.status === STAND_BY || element.status === START);
    return completeds.length;
}

// const getTotalPendingsFor = (languages) => {
//     const { STAND_BY, START } =  STATUS;
//     let occurences = 0;
//     for (let i=0; i<languages.length; i++) {
//         if (languages[i].status === STAND_BY || languages[i].status === START) {
//             occurences++;
//         }
//     }
//     return occurences;
// }

// const getTotalPendingsWhile = (languages) => {
//     const { STAND_BY, START } =  STATUS;
//     let occurences = 0;
//     let i=0;
//     while (i<languages.length) {
//         if (languages[i].status === STAND_BY || languages[i].status === START) {
//             occurences++;
//         }
//         i++;
//     }
//     return occurences;
// }
