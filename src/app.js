import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './homepage.js';

const home = new Homepage();
home.getPokemonsById(1,10);

// pokemon = await api.getPokemonByRange(1,100);
// console.log(pokemon[0].sprites.other.dream_world.front_default);
