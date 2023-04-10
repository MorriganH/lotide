const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`\u{1F4B9}\u{1F4B9}\u{1F4B9} Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  }
  console.log(`\u274C\u274C\u274C Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  return false;
};

module.exports = assertObjectsEqual;