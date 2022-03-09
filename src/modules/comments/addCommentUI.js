import postComment from './postComment.js';
import commentsCounter from './commentsCounter.js';

const removeMsg = () => {
  document.getElementById('msg').remove();
};

const updateComments = (element) => {
  const container = document.getElementById('comment-list');
  const li = document.createElement('li');
  const today = new Date().toISOString().replace(/T.*/, '').split('-')
    .join('-');
  li.innerHTML = `${today} <span>${element.username}</span> ${element.comment}`;
  const heading = document.getElementById('heading');
  heading.innerHTML = `<h2>Comments (${commentsCounter(element.item_id)})</h2>`;
  container.appendChild(li);
};

const addCommentUI = (ref) => {
  const addCommentContainer = document.createElement('div');
  addCommentContainer.classList.add('add-comment-container');
  addCommentContainer.innerHTML = `
  <h2>Add a comment</h2>
  <div id="input-container" class="form__group field">
    <input class="form__field" type="text" id="username" placeholder="Your Name" required>
    <textarea class="form__field" name="comment" placeholder="Your comment" id="comment" cols="30" rows="10"></textarea>
  </div>
`;
  const addCommentBtn = document.createElement('button');
  addCommentBtn.classList.add('btn');
  addCommentBtn.id = ref;
  addCommentBtn.innerText = 'Comment';
  let retry = false;
  addCommentBtn.addEventListener('click', (e) => {
    if (retry === true) {
      removeMsg();
    }
    const userName = document.getElementById('username');
    const myComment = document.getElementById('comment');
    if (userName.value !== '' && myComment.value !== '') {
      const data = {
        item_id: e.target.id,
        username: userName.value,
        comment: myComment.value,
      };
      postComment(data);
      updateComments(data);
      userName.value = '';
      myComment.value = '';
    } else {
      retry = true;
      const msg = document.createElement('p');
      msg.id = 'msg';
      msg.innerText = 'Please fill all field';
      const inputDiv = document.getElementById('input-container');
      inputDiv.prepend(msg);
    }
  });
  addCommentContainer.appendChild(addCommentBtn);
  return addCommentContainer;
};

export default addCommentUI;