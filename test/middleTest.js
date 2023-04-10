const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {

  it('should return an empty array if given an array with 2 or fewer values', () => {
    const array = [1, 2];
    assert.deepEqual(middle(array), []);
  });

  it('should return the middle value from an array with an odd length', () => {
    const array = [1, 2, 3];
    assert.deepEqual(middle(array), [2]);
  });

  it('should return the middle two values from an array with an even length', () => {
    const array = [1, 2, 3, 4];
    assert.deepEqual(middle(array), [2, 3]);
  });
});