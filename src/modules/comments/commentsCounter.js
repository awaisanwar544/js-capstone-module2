let counter = 0;

const commentsCounter = (ref) => {
  if (typeof ref === 'object') {
    counter = ref.length;
    return counter;
  }
  counter += 1;
  return counter;
};

export default commentsCounter;