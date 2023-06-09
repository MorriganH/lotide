const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F4B9}\u{1F4B9}\u{1F4B9} Assertation Passed: ${actual} === ${expected}`);
    return true;
  }
  console.log(`\u274C\u274C\u274C Assertation Failed: ${actual} !== ${expected}`);
  return false;
};

module.exports = assertEqual;