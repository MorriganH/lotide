const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositionsTest', () => {

  it('should return an object of chacacters whose values are arrays of character positions where they appear in the given string', () => {
    const word = 'hello';
    assert.deepEqual(letterPositions(word), {h: [0], e: [1], l: [2, 3], o: [4]});
  });

  it('should return an empty object if given an empty string', () => {
    assert.deepEqual(letterPositions(''), {});
  });
});