const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`\u{1F4B9}\u{1F4B9}\u{1F4B9} Assertation Passed: ${actual} === ${expected}`);
  }
  return console.log(`\u274C\u274C\u274C Assertation Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(object, value) {
  let foundKey;
  for (let key in object) {
    if (object[key] === value) {
      foundKey = key;
    }
  }
  return foundKey;
};


/* Test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/