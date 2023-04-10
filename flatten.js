const flatten = function(array) {
  let flattened = [];
  for (let val of array) {
    if (Array.isArray(val)) {
      for (let nestedVal of val) {
        flattened.push(nestedVal);
      }
    } else {
      flattened.push(val);
    }
  }
  return flattened;
};

module.exports = flatten;