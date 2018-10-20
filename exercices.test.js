const answers = require('./answers');

describe('my own map function', () => {
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
