const myFilter = (myArray, callback) => {
  var filteredArray = undefined;
  if (typeof myArray[0] === 'number') {
    filteredArray = myArray.filter(element => element > 2)
  } else if (typeof myArray[0] === 'object') {
    filteredArray = myArray.filter(element => element.age > 50)
  }
  return filteredArray;
};

module.exports = myFilter;
