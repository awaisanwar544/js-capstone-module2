import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './homepage.js';

const home = new Homepage();
home.getPokemonsById(1,10);

