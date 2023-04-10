const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe('#assertArraysEqual', () => {

  it('should return true if two arrays are equal', () => {
    const test = [1, 2, 3];
    assert.isTrue(assertArraysEqual(test, [1, 2, 3]));
  });

  it('should return false if two arrays are not equal', () => {
    const test = [1, 2, 3];
    assert.isFalse(assertArraysEqual(test, [3, 2, 1]));
  });
});