const itemDetailsUI = (pokemon) => {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('item-container');
  itemContainer.innerHTML = `
  <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="pokemon image">
  <h2>${pokemon.name}</h2>
  <ul>
    <li>Weight: ${pokemon.weight} pounds</li>
    <li>Height: ${pokemon.height} feet</li>
    <li>Main Ability: ${pokemon.abilities[0].ability.name}</li>
    <li>Species: ${pokemon.species.name}</li>
  </ul>
`;
  return itemContainer;
};

export default itemDetailsUI;