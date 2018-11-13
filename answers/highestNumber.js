const highestNumber = myArray => {
  if (myArray.length > 0) {
    return Math.max(...myArray);
  }
};

module.exports = highestNumber;
