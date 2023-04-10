const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

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
