const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F4B9}\u{1F4B9}\u{1F4B9} Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertation Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayA, arrayB) {
  for (let index = 0; index < arrayA.length || index < arrayB.length; index++) {
    if (arrayA[index] !== arrayB[index]) {
      return false;
    }
  }
  return true;
};

/* Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3, 2], [1, 2, 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 2]), false); // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
*/