const assertArraysEqual = function(arrayA, arrayB){
  if (eqArrays(arrayA, arrayB)) {
    console.log(`\u{1F4B9}\u{1F4B9}\u{1F4B9} Assertation Passed, arrays are equal.`);
  } else {
    console.log(`\u274C\u274C\u274C Assertation Failed: arrays are not equal.`);
  }

};

const eqArrays = function(arrayA, arrayB) {
  for (index = 0; index < arrayA.length || index < arrayB.length; index++) {
    if (arrayA[index] !== arrayB[index]) {
      return false;
    }
  }
  return true;
};