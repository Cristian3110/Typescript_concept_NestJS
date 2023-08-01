import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import {setupCounter} from './counter.ts';
// import {kubito, dog1} from './bases/03-classes.ts';
// import {charmander} from './bases/04-injection.ts';
// import {charmander} from './bases/05-decorators.ts';
import {charmander} from './bases/06-decorators2.ts';

// import {age, name} from './bases/01-types';
// import {pokemonIds, pokemons} from './bases/02-objects.ts';

/********************************************
 * Este codigo era para mostrar el antiguo 03-classes
 * 
 * <p>Hello pokemon ${kubito.name}</p>

  <p> Hola perro  ${dog1.name}</p>

 */

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>

  <p>Hello ${charmander.name}</p>
   
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
