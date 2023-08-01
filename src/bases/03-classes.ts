import axios from 'axios';
import {
	PokeapiResponse,
	Generation,
} from '../interfaces/pokeapi-response.interfaces';

//forma larga
export class Pokemon {
	public id: number;
	public name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;

		//console.log('constructor de pokemon');
	}
	scream() {
		//console.log(`${this.name.toUpperCase()}`);
	}
}
export const kubito = new Pokemon(1, 'kubito');
kubito.scream();

// forma corta de crear una clase
export class Perro {
	//getter
	get imageUrl(): string {
		return `https://dogs.com/${this.id}.jpg`;
	}

	constructor(
		public readonly id: number,
		public name: string,
		public raza: string
	) {
		this.id = id;
		this.name = name;
		this.raza = raza;

		//console.log('Constructor de Perros');
	}

	//methods
	scream() {
		//console.log(`${this.name.toUpperCase()}`);
	}

	speack() {
		//console.log(`${this.name}, ${this.name}`);
	}

	async getMoves(): Promise<Generation[]> {
		// const moves = 10;
		const {data} = await axios.get<PokeapiResponse>(
			'https://pokeapi.co/api/v2/type/3'
		);
		console.log(data.moves);
		return data.moves;
	}
}

export const dog1 = new Perro(1, 'Bayron', 'Mestizo');
console.log(dog1);
// console.log(perro1.imageUrl);

// perro1.speack();

//Solicitando los movimientos del Dog1
dog1.getMoves();
