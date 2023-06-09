const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {

  it('should return an object with key-value pairs where letter: count', () => {
    const test = "lighthouse in the house";
    assert.deepEqual(countLetters(test), {l:1, i:2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1});
  });

  it('should return an empty object if input string is empty', () => {
    const test = '';
    assert.deepEqual(countLetters(test), {});
  });
});