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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let index = 0; index < source.length; index++) {
    for (let removeIndex = 0; removeIndex < itemsToRemove.length; removeIndex++) {
      //if source value same as remove value, check next source value
      if (source[index] === itemsToRemove[removeIndex]) {
        break;
        //if source value has been checked against every remove value and is still ok, add to newArray
      } else if (removeIndex === itemsToRemove.length - 1) {
        newArray.push(source[index]);
      }
    }
  }
  return newArray;
};