import itemsCounter from '../modules/homepage/itemsCounter.js';
import commentsCounter from '../modules/comments/commentsCounter.js';

describe('items counter test', () => {
  test('itemsCounter', () => {
    const testArray = [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
      {
        name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
      },
    ];
    expect(itemsCounter(testArray)).toBe(3);
  });

  test('itemsCounter for empty array', () => {
    const testArray = [];
    expect(itemsCounter(testArray)).toBe(0);
  });
});

describe('comments counter test', () => {
  test('commentCounter', () => {
    const testArray = [
      {
        comment: 'This is nice!',
        creation_date: '2021-01-10',
        username: 'John',
      },
      {
        comment: 'Great content!',
        creation_date: '2021-02-10',
        username: 'Jane',
      },
    ];
    expect(commentsCounter(testArray)).toBe(2);
  });

  test('commentCounter emtpy array', () => {
    const testArray = [];
    expect(commentsCounter(testArray)).toBe(0);
  });

  test('commentCounter if not array', () => {
    const ref = 3;
    expect(commentsCounter(ref)).toBe(1);
  });

  test('commentCounter if not array', () => {
    const ref = 3;
    expect(commentsCounter(ref)).toBeGreaterThan(0);
  });

  test('commentCounter is incremented in case of not array', () => {
    const counter = 0;
    const ref = 2;
    expect(commentsCounter(ref) > counter + 1).toBeTruthy();
  });
});