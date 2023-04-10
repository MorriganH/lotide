const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {

  it('should return an array that does not include specified values', () => {
    const array = [1, 2, 3];
    assert.deepEqual(without(array, [1]), [2, 3]);
  });

  it('should return an empty array if given an empty array', () => {
    assert.deepEqual(without([], [1]), []);
  });

  it('should return the full given array if specified values not found', () => {
    const array = [1, 2, 3];
    assert.deepEqual(without(array, [4, 5]), [1, 2, 3]);
  });
});