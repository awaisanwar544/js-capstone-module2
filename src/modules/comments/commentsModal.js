import addCommentUI from './addCommentUI.js';
import commentsUI from './commentsUI.js';
import itemDetailsUI from './itemDetailsUI.js';

const removeModal = () => {
  const commentsModal = document.getElementById('comments-modal');
  commentsModal.remove();
};

const commentsModal = (pokemon) => {
  const main = document.getElementById('main');
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('comments-modal');
  modalContainer.id = 'comments-modal';
  const x = document.createElement('p');
  x.id = 'close-icon';
  x.addEventListener('click', removeModal);
  x.innerText = 'X';
  modalContainer.appendChild(x);
  modalContainer.appendChild(itemDetailsUI(pokemon));
  modalContainer.appendChild(commentsUI(pokemon.id));
  modalContainer.appendChild(addCommentUI());
  main.prepend(modalContainer);
  return modalContainer;
};

export default commentsModal;