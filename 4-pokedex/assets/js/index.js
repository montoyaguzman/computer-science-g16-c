const getPokemons = async () => {
    // fetch('https://pokeapi.co/api/v2/pokemon/', { method: 'GET' })
    //     .then(response => response.json())
    //     .then(pokemons => console.log('pokemons: ', pokemons));
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const responseJson =  await response.json();
    const pokemons = responseJson.results;
    for(const element of pokemons){
        console.log(element);
        const response = await fetch(element.url);
        const responseJson = await response.json();
        const img = responseJson.sprites.other['official-artwork'].front_default;
        console.log('img: ', img);
    };
}

getPokemons();





