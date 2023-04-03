const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F4B9}\u{1F4B9}\u{1F4B9} Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertation Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

/* Test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([4]), 4);
assertEqual(head([]), undefined);
*/