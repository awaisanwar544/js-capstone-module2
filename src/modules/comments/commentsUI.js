import getComments from './getComments.js';

const comments = getComments('item1');

const commentsUI = () => {
  const commentsCounter = comments.length;
  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('comments-container');
  const heading = document.createElement('h2');
  heading.innerHTML = `<h2>Comments (${commentsCounter})</h2>`;
  commentsContainer.appendChild(heading);
  const commentList = document.createElement('ul');
  comments.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `${element.creation_date} <span>${element.username}</span> ${element.comment}`;
    commentList.appendChild(li);
  });
  commentsContainer.appendChild(commentList);
  return commentsContainer;
};

export default commentsUI;