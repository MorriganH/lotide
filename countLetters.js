const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`\u{1F4B9}\u{1F4B9}\u{1F4B9} Assertation Passed: ${actual} === ${expected}`);
  }
  return console.log(`\u274C\u274C\u274C Assertation Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string) {
  let counts = {};
  for (let character of string) {
    if (character !== " ") {
      if (counts[character]) {
        counts[character]++;
      } else {
        counts[character] = 1;
      }
    }
  }
  console.log(counts);
  return counts;
};

/* Test cases
const testString1 = "lighthouse in the house";
const testString2 = "supercallafrajulisticexpialladocious";

assertEqual(countLetters(testString1).h, 4);
assertEqual(countLetters(testString1).l, 1);
assertEqual(countLetters(testString1).t, 2);
assertEqual(countLetters(testString1).z, undefined);
assertEqual(countLetters(testString2).s, 3);
assertEqual(countLetters(testString2).l, 5);
assertEqual(countLetters(testString2).x, 1);
assertEqual(countLetters(testString2).z, undefined);
*/