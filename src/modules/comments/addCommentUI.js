const addCommentUI = () => {
  const addCommentContainer = document.createElement('div');
  addCommentContainer.classList.add('add-comment-container');
  addCommentContainer.innerHTML = `
  <h2>Add a comment</h2>
  <div>
    <input type="text" id="username" placeholder="Your name">
    <textarea name="comment" placeholder="Your comment" id="comment" cols="30" rows="10"></textarea>
    <input type="button" id="comment-btn" value="Comment">
  </div>
`;
  return addCommentContainer;
};

export default addCommentUI;