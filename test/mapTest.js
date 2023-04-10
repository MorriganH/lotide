const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {

  it('should return an array that has had a process done on each element of a given array', () => {
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    assert.deepEqual(map(words, word => word[0]), ['g','c','t','m','t']);
  });

  it('should return an empty array if given an empty array', () => {
    assert.deepEqual(map([], word => word[0]), []);
  });
});