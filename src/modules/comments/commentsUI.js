import getComments from './getComments.js';
import commentsCounter from './commentsCounter.js';

const commentsUI = (id) => {
  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('comments-container');
  getComments(id)
    .then(async (data) => {
      if (!data.error) {
        const heading = document.createElement('h2');
        heading.innerHTML = `<h2>Comments (${commentsCounter(data)})</h2>`;
        commentsContainer.appendChild(heading);
        const commentList = document.createElement('ul');
        data.forEach((element) => {
          const li = document.createElement('li');
          li.innerHTML = `${element.creation_date} <span>${element.username}</span> ${element.comment}`;
          commentList.appendChild(li);
        });
        commentsContainer.appendChild(commentList);
      } else {
        const commentsCounter = 0;
        const heading = document.createElement('h2');
        heading.innerHTML = `<h2>Comments (${commentsCounter})</h2>`;
        commentsContainer.appendChild(heading);
      }
    });
  return commentsContainer;
};

export default commentsUI;