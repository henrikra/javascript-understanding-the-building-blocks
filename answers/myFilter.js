const myFilter = (myArray, callback) => {
  var filteredArray = [];
  for(i = 0; i < myArray.length; i++){
    if (callback(myArray[i])) {
      filteredArray.push(myArray[i])
    }
  }
  return filteredArray;
};

module.exports = myFilter;
