const answers = require('./answers');

/**
 * Make a function that calls it's first argument which is a callback function
 * and returns callback function's return value
 */
describe('my callback', () => {
  test('handles numbers', () => {
    const actualValue = answers.myCallback(() => {
      return 42;
    });
    expect(actualValue).toEqual(42);
  });

  test('handles strings', () => {
    const actualValue = answers.myCallback(() => {
      return 'You got this!';
    });
    expect(actualValue).toEqual('You got this!');
  });
});

/**
 * Make you own implementation of map
 */
describe('my map function', () => {
  test('handles numbers', () => {
    const actualValue = answers.myMap([1, 2, 3], currentNumber => {
      return currentNumber * 2;
    });
    expect(actualValue).toEqual([2, 4, 6]);
  });

  test('handles objects', () => {
    const actualValue = answers.myMap(
      [{ name: 'Nellie', age: 34 }, { name: 'Reem', age: 19 }, { name: 'Darin', age: 66 }],
      person => {
        return `${person.name} is ${person.age} years old`;
      }
    );
    expect(actualValue).toEqual([
      'Nellie is 34 years old',
      'Reem is 19 years old',
      'Darin is 66 years old'
    ]);
  });
});

/**
 * Make your own implementation of filter
 */
describe('my filter function', () => {
  test('handles numbers', () => {
    const actualValue = answers.myFilter([1, 2, 3, 50, 1000], currentNumber => {
      return currentNumber > 2;
    });
    expect(actualValue).toEqual([3, 50, 1000]);
  });

  test('handles objects', () => {
    const actualValue = answers.myFilter(
      [{ name: 'Nellie', age: 34 }, { name: 'Reem', age: 19 }, { name: 'Darin', age: 66 }],
      person => {
        return person.age > 50;
      }
    );
    expect(actualValue).toEqual([{ name: 'Darin', age: 66 }]);
  });
});
