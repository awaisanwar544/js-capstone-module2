import commentsModal from '../comments/commentsModal.js';

const homePageUI = (items) => {
  const main = document.getElementById('main');
  const itemsContainer = document.createElement('div');
  itemsContainer.setAttribute('id', 'items-container');
  items.forEach((pokemon) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-div');
    itemContainer.innerHTML = `
      <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="pokeman image">
      <h2>${pokemon.name}</h2>
      <p><span class="likes">4</span> &nbsp; Likes &nbsp;<span class="like-btn">&#9829;</span></p>
    `;
    const commentBtn = document.createElement('button');
    commentBtn.classList.add('btn', 'comment-btn');
    commentBtn.id = pokemon.id;
    commentBtn.innerText = 'Comments';
    commentBtn.addEventListener('click', (e) => {
      commentsModal(items[e.target.id - 1]);
    });
    itemContainer.appendChild(commentBtn);
    itemsContainer.appendChild(itemContainer);
  });
  main.appendChild(itemsContainer);
};

export default homePageUI;