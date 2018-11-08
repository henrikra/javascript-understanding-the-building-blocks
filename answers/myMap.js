const myMap = (myArray, callback) => {
  const result = myArray.map(element => {
  if (typeof element === 'number') {
    return element * 2;
  } else if (typeof element === 'object') {
    return `${element.name} is ${element.age} years old`;
  }
  })
return result;
};

module.exports = myMap;
