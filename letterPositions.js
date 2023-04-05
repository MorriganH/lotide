const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    return console.log(`\u{1F4B9}\u{1F4B9}\u{1F4B9} Assertation Passed, arrays are equal.`);
  } 
  return console.log(`\u274C\u274C\u274C Assertation Failed: arrays are not equal.`);
};

const eqArrays = function(arrayA, arrayB) {
  for (let index = 0; index < arrayA.length || index < arrayB.length; index++) {
    if (arrayA[index] !== arrayB[index]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  const results = {};
  console.log(sentence);
  for (let character = 0; character < sentence.length; character++) {
    if (sentence[character] !== " ") {
      if (results[character]) {
        results[sentence[character]].push(character);
      } else {
        results[sentence[character]] = [character];
        console.log(results);
      }
    }
  }
  return results;
};


assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('hello').o, [4]);