const addCommentUI = () => {
  const addCommentContainer = document.createElement('div');
  addCommentContainer.classList.add('add-comment-container');
  addCommentContainer.innerHTML = `
  <h2>Add a comment</h2>
  <div class="form__group field">
    <input class="form__field" type="text" id="username" placeholder="Your Name">
    <textarea class="form__field" name="comment" placeholder="Your comment" id="comment" cols="30" rows="10"></textarea>
    <button type="button" class="btn" id="comment-btn"> Comment </button>
  </div>
`;
  return addCommentContainer;
};

export default addCommentUI;