const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {

  it('should flatten a two dimensional array into a single dimensional array', () => {
    const array = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(array), [1, 2, 3, 4, 5, 6]);
  });

  it('should return an empty array if given an empty array', () => {
    const array = [];
    assert.deepEqual(flatten(array), []);
  });
});