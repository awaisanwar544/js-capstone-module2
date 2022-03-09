import postLike from './postLike.js';

const likes = (pokemon, item) => {
  let likesCounter = 0;
  if (item.length !== 0) {
    likesCounter = item[0].likes;
  }
  const p = document.createElement('p');
  p.innerHTML = `<span id="likesCount-${pokemon.id}"class="likes">${likesCounter}</span> &nbsp; Likes &nbsp;`;
  const likesBtn = document.createElement('button');
  likesBtn.classList.add('btn', 'like-btn');
  likesBtn.id = `like-${pokemon.id}`;
  likesBtn.innerHTML = '&#9829;';
  likesBtn.addEventListener('click', (e) => {
    if (!e.target.classList.contains('clicked')) {
      const btn = document.getElementById(e.target.id);
      btn.classList.add('clicked');
      const refID = e.target.id.match(/\d/g).join('');
      const likeSpan = document.getElementById(`likesCount-${refID}`);
      likeSpan.innerText = Number(likeSpan.innerText) + 1;
      const data = {
        item_id: refID,
      };
      postLike(data);
    }
  });
  p.appendChild(likesBtn);
  return p;
};

export default likes;