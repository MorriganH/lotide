const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#assertEqual', () => {

  it('should return true if two inputs are equal', () => {
    const val = 5;
    assert.isTrue(assertEqual(val, 5));
  });

  it('should return false if two inputs are not equal', () => {
    const val = '5';
    assert.isFalse(assertEqual(val, 5));
  });
});