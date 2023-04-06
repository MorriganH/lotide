const eqArrays = function(arrayA, arrayB) {
  for (let index = 0; index < arrayA.length || index < arrayB.length; index++) {
    if (arrayA[index] !== arrayB[index]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`\u{1F4B9}\u{1F4B9}\u{1F4B9} Assertation Passed: [${actual}] === [${expected}]`);
  }
  return console.log(`\u274C\u274C\u274C Assertation Failed: [${actual}] !== [${expected}]`);
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


/* Test cases
const words = ['ground', 'control', 'to', 'major', 'tom'];

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ['g','c','t','m','t']);
assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t'])
assertArraysEqual(map(words, word => word[1]), ['r','o','o','a','o'])
assertArraysEqual(map(words, word => word[word.length - 1]), ['d','l','o','r','m'])
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3])
*/