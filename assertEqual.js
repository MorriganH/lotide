const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`\u{1F4B9}\u{1F4B9}\u{1F4B9} Assertation Passed: ${actual} === ${expected}`);
  }
  return console.log(`\u274C\u274C\u274C Assertation Failed: ${actual} !== ${expected}`);
};