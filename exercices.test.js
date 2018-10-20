const answers = require('./answers');

describe('my callback', () => {
  test('handles numbers', () => {
    expect(
      answers.myCallback(() => {
        return 42;
      })
    ).toEqual(42);
  });
  test('handles strings', () => {
    expect(
      answers.myCallback(() => {
        return 'You got this!';
      })
    ).toEqual('You got this!');
  });
});

describe('my map function', () => {
  test('handles numbers', () => {
    expect(
      answers.myMap([1, 2, 3], currentNumber => {
        return currentNumber * 2;
      })
    ).toEqual([2, 4, 6]);
  });

  test('handles objects', () => {
    expect(
      answers.myMap(
        [{ name: 'Nellie', age: 34 }, { name: 'Reem', age: 19 }, { name: 'Darin', age: 66 }],
        person => {
          return `${person.name} is ${person.age} years old`;
        }
      )
    ).toEqual(['Nellie is 34 years old', 'Reem is 19 years old', 'Darin is 66 years old']);
  });
});

describe('my filter function', () => {
  test('handles numbers', () => {
    expect(
      answers.myFilter([1, 2, 3, 50, 1000], currentNumber => {
        return currentNumber > 2;
      })
    ).toEqual([3, 50, 1000]);
  });

  test('handles objects', () => {
    expect(
      answers.myFilter(
        [{ name: 'Nellie', age: 34 }, { name: 'Reem', age: 19 }, { name: 'Darin', age: 66 }],
        person => {
          return person.age > 50;
        }
      )
    ).toEqual([{ name: 'Darin', age: 66 }]);
  });
});
