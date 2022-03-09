import itemsCounter from '../modules/homepage/itemsCounter.js';
import commentsCounter from '../modules/comments/commentsCounter.js';

describe('counter test', () => {
  test('itemsCounter', () => {
    let testArray = [1,2,3,4,5];
    expect(itemsCounter(testArray)).toBe(5);
  }); 
  test('commentCounter', () => {
    let testArray = ['h',4,'b',4,5,'m'];
    expect(commentsCounter(testArray)).toBe(6);
  });
});