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

const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  }
  if (array.length % 2 === 0) {
    middleArray.push(array[array.length / 2 - 1]);
  }
  middleArray.push(array[Math.floor(array.length / 2)]);
  console.log(middleArray);
  return middleArray;
};


/* Test cases
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 5, 3]), [5]);
assertArraysEqual(middle([1, 2, 5, 4]), [2, 5]);
assertArraysEqual(middle([1, 2, 6, 4, 5]), [6]);
assertArraysEqual(middle([1, 2, 10, 1, 5, 6]), [10, 1]);
*/