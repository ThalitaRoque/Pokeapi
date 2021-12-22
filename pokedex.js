const div$$ = document.querySelector(".container");
const pokemonsarray = [];
const Pokelist = document.querySelector("#pokedex");




 let getPokemons = async () => {
for (let i = 1; i <= 151; i++) {
    const pokemonsApi = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemonsRes = await pokemonsApi.json();
    pokemonsarray.push(await pokemonsRes);
    }

    const mappedPokemons = pokemonsarray.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(' '),
            id: result.id,
            
            
    }));

paintsPokemons(mappedPokemons)

};
const paintsPokemons = (mappedPokemons) => { 
    let listPokemons = "";
    mappedPokemons.forEach(poke => {
      listPokemons += 
      `<li class="display__element">
      <h3>${poke.name}</h3>
    <img class ="pokemonimage"src="${poke.image}" max-width="200px"/>
    <p>NUMERO #${poke.id}</p>
    <p>$${poke.type}</p>`
    });

  Pokelist.innerHTML = listPokemons;
    
    
}



getPokemons();
