// service of the PokeApdater

import axios from 'axios';

//implementando el principio de sustitución de liscou
//implementando un esquema mediante una interface, para saber como debe estar estructurada mi class
export interface HttpAdapter {
	get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
	async get<T>(url: string): Promise<T> {
		const resp = await fetch(url);
		const data: T = await resp.json();

		return data;
	}
}

export class PokeApiAdapter implements HttpAdapter {
	private readonly axios = axios;

	async get<T>(url: string): Promise<T> {
		const {data} = await this.axios.get<T>(url);
		return data;
	}
}
//'https://pokeapi.co/api/v2/type/3'
