const hasValueAtKey = (myObject, key) => {
  const myObjectKeys = Object.keys(myObject);
  return myObjectKeys.includes(key);
};

module.exports = hasValueAtKey;
