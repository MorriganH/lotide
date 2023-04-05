const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`\u{1F4B9}\u{1F4B9}\u{1F4B9} Assertation Passed: [${actual}] === [${expected}]`);
  } 
  return console.log(`\u274C\u274C\u274C Assertation Failed: [${actual}] !== [${expected}]`);
};

const eqArrays = function(arrayA, arrayB) {
  for (let index = 0; index < arrayA.length || index < arrayB.length; index++) {
    if (arrayA[index] !== arrayB[index]) {
      return false;
    }
  }
  return true;
};

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


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1], [2], [3], [4], [5], [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2, 3, 4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2, 3, 4, 5], 6]), [1, 2, 3, 4, 5, 6]);
