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

const takeUntil = function(array, callback) {
  let until = [];
  for (let val of array) {
    if (callback(val)) {
      break;
    }
    until.push(val);
  }
  return until;
};

/* Test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

console.log('---');

const data3 = [5, 6, 7, 12, 3, 9, "not cool", 1, 2, 3, 4, 10];
const results3 = takeUntil(data3, x => typeof(x) === 'string');
assertArraysEqual(results3, [5, 6, 7, 12, 3, 9]);
*/