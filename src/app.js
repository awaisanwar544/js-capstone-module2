import homeItems from './modules/homepage/homeItems.js';
import homePageUI from './modules/homepage/homePageUI.js';
import './main.css';

const main = async () => {
  const pokemonList = await homeItems();
  homePageUI(pokemonList);
};

main();
