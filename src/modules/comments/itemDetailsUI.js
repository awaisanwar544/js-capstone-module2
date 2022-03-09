const itemDetailsUI = (pokemon) => {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('item-container');
  itemContainer.innerHTML = `
  <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="pokemon image">
  <h2>${pokemon.name}</h2>
  <ul>
    <li>Weight: &emsp; ${pokemon.weight} pounds</li>
    <li>Height: &emsp; ${pokemon.height} feet</li>
    <li>Main Ability: &emsp; ${pokemon.abilities[0].ability.name}</li>
    <li>Species: &emsp; ${pokemon.species.name}</li>
  </ul>
`;
  return itemContainer;
};

export default itemDetailsUI;