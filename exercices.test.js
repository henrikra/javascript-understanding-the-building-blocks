const answers = require('./answers');

/**
 * Make a function that adds two parameters together
 */
describe('add function', () => {
  it('some numbers', () => {
    const actualValue = answers.add(120, 66);
    expect(actualValue).toEqual(186);
  });
  it('some numbers part 2', () => {
    const actualValue = answers.add(71, 10);
    expect(actualValue).toEqual(81);
  });
});

/**
 * Make a function that creates student object with name
 */
describe('createStudent', () => {
  it('some name', () => {
    const actualValue = answers.createStudent('George');
    expect(actualValue).toEqual({ name: 'George', grade: null, courses: [], isGraduated: false });
  });
  it('some name part 2', () => {
    const actualValue = answers.createStudent('Lisa');
    expect(actualValue).toEqual({ name: 'Lisa', grade: null, courses: [], isGraduated: false });
  });
});

/**
 * Make a function that returns highest number in array
 */
describe('highestNumber', () => {
  it('some numbers', () => {
    const actualValue = answers.highestNumber([5, 50, 666, 30]);
    expect(actualValue).toEqual(666);
  });
  it('some numbers part 2', () => {
    const actualValue = answers.highestNumber([10000, 4, 44, 567]);
    expect(actualValue).toEqual(10000);
  });
  it('handles negative numbers', () => {
    const actualValue = answers.highestNumber([-10000, -4, -44, -567]);
    expect(actualValue).toEqual(-4);
  });
  it('without any numbers', () => {
    const actualValue = answers.highestNumber([]);
    expect(actualValue).toEqual(undefined);
  });
});

/**
 * Make a function that check if given object has any value at given key
 */
describe('hasValueAtKey', () => {
  it('finds if key has value', () => {
    const actualValue = answers.hasValueAtKey({ name: 'Axel', heigh: 170 }, 'name');
    expect(actualValue).toEqual(true);
  });
  it('does not find if key is not there', () => {
    const actualValue = answers.hasValueAtKey({ name: 'Axel', height: 170 }, 'age');
    expect(actualValue).toEqual(false);
  });
});

/**
 * Make a function that censors bad words with 4 stars (****)
 */
describe('censorBadWords', () => {
  it('some bad sentences', () => {
    const actualValue = answers.censorBadWords('Hello you are fucking weird');
    expect(actualValue).toEqual('Hello you are **** weird');
  });
  it('some bad sentences 2', () => {
    const actualValue = answers.censorBadWords('You piece of shit go fuck your self!');
    expect(actualValue).toEqual('You piece of **** go **** your self!');
  });
});

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

  test('handles numbers with sum', () => {
    const actualValue = answers.myCallback(() => {
      return 22 + 33;
    });
    expect(actualValue).toEqual(55);
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
