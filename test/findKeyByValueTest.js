const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {

  it('should return the name of the key that matches the given value', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });

  it('should return undefined if the given value is not found', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre), "Spongebob");
  });
});