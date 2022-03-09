import './main.css';
import homeItems from './modules/homepage/homeItems.js';
import homePageUI from './modules/homepage/homePageUI.js';

const main = async () => {
  const pokemonList = await homeItems();
  homePageUI(pokemonList);
};

main();