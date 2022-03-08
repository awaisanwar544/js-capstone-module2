const commentsUI = () => {
  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('comments-container');
  commentsContainer.innerHTML = `
    <h2>Comments (2)</h2>
    <ul>
      <li>03/12/2021 <span>Awais:</span> Nice</li>
      <li>02/11/2021 <span>Alex:</span> I'd love to buy it!</li>
    </ul>
`;
  return commentsContainer;
};

export default commentsUI;