const NOT_IMAGE_TEXT = 'la imagen del pokemon';
let pokemons = [];

const getPokemons = async () => {
    console.log('paso 2');
    // fetch('https://pokeapi.co/api/v2/pokemon/', { method: 'GET' })
    //     .then(response => response.json())
    //     .then(pokemons => console.log('pokemons: ', pokemons));
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const responseJson =  await response.json();
    const pokemons = responseJson.results;
    for(const element of pokemons){
        const response = await fetch(element.url);
        const imgResponseJson = await response.json();
        normalizePokemonData(element.name, imgResponseJson)
    };
};

const normalizePokemonData =  (name, imgResponseJson) => {
    const img = imgResponseJson?.sprites?.other['official-artwork']?.front_default || '';
    const pokemon = { name: name, img: img };
    pokemons.push(pokemon);
};

const renderCardPokemon = (element, index) => {
    console.log('element: ', element);
    const cardPokemonDiv = document.createElement('div');
    const pokemonImg = document.createElement('img');
    const brElement = document.createElement('br');
    const pokemonNameSpan = document.createElement('span');

    cardPokemonDiv.className = 'center';
    pokemonImg.className = 'icon-region';
    pokemonImg.setAttribute('src', element.img);
    pokemonImg.setAttribute('alt', NOT_IMAGE_TEXT);

    cardPokemonDiv.appendChild(pokemonImg);
    cardPokemonDiv.appendChild(brElement);
    cardPokemonDiv.appendChild(pokemonNameSpan);
    pokemonNameSpan.innerHTML = element.name;

}

const renderPokemons = (pokemons) => {
    console.log('5 pokemons => ', pokemons);
    pokemons.forEach(renderCardPokemon);
}

console.log('paso 1');
getPokemons();
console.log('paso 3');
console.log('4 pokemons => ', pokemons);
renderPokemons(pokemons);
console.log('paso 6');


// async function main() {
//     await getPokemons();
//     renderPokemons(pokemons);
// }
// main();


