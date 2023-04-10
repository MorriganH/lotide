const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {

  it('should return the beginning of array up until the given criteria is met', () => {
    const array = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(array, x => x < 0), [1, 2, 5, 7, 2]);
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data, x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });
  
  it('should return an empty array if given an empty array', () => {
    assert.deepEqual(takeUntil([], x => x < 0), []);
  });
  
  it('should return the full array if criteria is not met', () => {
    const array = [1, 2, 5, 7, 2, 1, 2, 4, 5];
    assert.deepEqual(takeUntil(array, x => x < 0), [1, 2, 5, 7, 2, 1, 2, 4, 5]);
  });
});