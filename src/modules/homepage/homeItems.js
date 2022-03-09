const itemsList = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0';
  const response = await fetch(url);
  return response.json();
};

const getData = async (url = '') => {
  const response = await fetch(url);
  return response.json();
};

const homeItems = async () => {
  const pokemon = [];
  const source = await itemsList();
  source.results.forEach(async (element) => {
    pokemon.push(getData(element.url));
  });
  return Promise.all(pokemon);
};

export default homeItems;