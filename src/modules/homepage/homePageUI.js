import commentsModal from '../comments/commentsModal.js';
import getLikes from '../likes/getLikes.js';
import likes from '../likes/likes.js';
import itemsCounter from './itemsCounter.js';

const homePageUI = async (items) => {
  const likesList = await getLikes().then((data) => data);
  const gallery = document.getElementById('gallery');
  gallery.innerText = `Gallery (${itemsCounter(items)})`;
  const main = document.getElementById('main');
  const itemsContainer = document.createElement('div');
  itemsContainer.setAttribute('id', 'items-container');
  items.forEach((pokemon) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-div');
    itemContainer.innerHTML = `
      <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="pokeman image">
      <h2>${pokemon.name}</h2>
    `;
    itemContainer.appendChild(likes(pokemon, likesList
      .filter((item) => item.item_id === pokemon.id.toString())));
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