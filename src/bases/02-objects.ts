export const pokemonIds = [1, 20, 30, 34, 66];

pokemonIds.push(+'1');
pokemonIds.push(354646846);
//console.log(pokemonIds);
interface Pokemon {
	id: number;
	name: string;
	age?: number | undefined;
}

export const pikachu: Pokemon = {
	id: 1,
	name: 'Pikachu',
	age: 15,
};

export const charmander: Pokemon = {
	id: 2,
	name: 'Charmander',
	age: 10,
};

//Aahora si es asignable
export const pokemons: Pokemon[] = [];

pokemons.push(pikachu, charmander);

console.log(pokemons);

// Lo que debo importar en el main
//<p>  ${pokemonIds.join('-')}</p>
//<hr>
//<p>  ${pokemons.join(',')}</p>
