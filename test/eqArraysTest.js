const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {

  it('should return true if two arrays are equal', () => {
    const test = [1, 2, 3];
    assert.isTrue(eqArrays(test, [1, 2, 3]));
  });

  it('should return false if two arrays are not equal', () => {
    const test = [1, 2, 3];
    assert.isFalse(eqArrays(test, [3, 2, 1]));
  });
});