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

const letterPositions = function(sentence) {
  const results = {};
  for (let character = 0; character < sentence.length; character++) {
    const currentChara = sentence[character];
    if (currentChara !== " ") {
      if (results[currentChara]) {
        results[currentChara].push(character);
        console.log(results);
      } else {
        results[currentChara] = [character];
        console.log(results);
      }
    }
  }
  return results;
};

/* Test cases
assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('hello').o, [4]);
letterPositions('lighthouse in the house');
*/