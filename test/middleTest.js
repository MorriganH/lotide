const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 5, 3]), [5]);
assertArraysEqual(middle([1, 2, 5, 4]), [2, 5]);
assertArraysEqual(middle([1, 2, 6, 4, 5]), [6]);
assertArraysEqual(middle([1, 2, 10, 1, 5, 6]), [10, 1]);
