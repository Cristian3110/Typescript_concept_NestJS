import {
	Generation,
	PokeapiResponse,
} from '../interfaces/pokeapi-response.interfaces';
import {
	HttpAdapter,
	PokeApiAdapter,
	PokeApiFetchAdapter,
} from './api/pokeApi.adapter';

export class Pokemon {
	get imageUrl(): string {
		return `https://pokemon.com/${this.id}.jpg`;
	}

	constructor(
		public readonly id: number,
		public name: string,
		// private http: PokeApiAdapter
		private readonly http: HttpAdapter
	) {}

	scream() {
		console.log(`${this.name.toUpperCase()}!!!`);
	}

	speak() {
		console.log(`${this.name}, ${this.name}`);
	}

	async getMoves(): Promise<Generation[]> {
		const data = await this.http.get<PokeapiResponse>(
			'https://pokeapi.co/api/v2/type/3'
		);
		console.log(data.moves);

		return data.moves;
	}
}

//instancia de la clase
const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeApiAxios);
export const pikachu = new Pokemon(4, 'Charmander', pokeApiFetch);

charmander.getMoves();
