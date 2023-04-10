const flatten = function(array) {
  let flattened = [];
  for (let index = 0; index < array.length; index++) {
    if (Array.isArray(array[index])) {
      for (let nested = 0; nested < array[index].length; nested++) {
        flattened.push(array[index][nested]);
      }
    } else {
      flattened.push(array[index]);
    }
  }
  return flattened;
};

module.exports = flatten;