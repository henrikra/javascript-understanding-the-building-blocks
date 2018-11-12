const myMap = (myArray, callback) => {
  var result = [];
    for (i = 0; i < myArray.length; i++) {
      var x = callback(myArray[i]);
      result.push(x);
};
return result;
}

module.exports = myMap;
