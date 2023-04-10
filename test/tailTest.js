const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it('should return an array with the first value of the given array removed', () => {
    const array = ['Hello', 'Lighthouse', 'Labs'];
    assert.deepEqual(tail(array), ['Lighthouse', 'Labs']);
  });

  it('should return an empty array if given an array with one or fewer values', () => {
    const array = ['Hello'];
    assert.deepEqual(tail(array), []);
  });
});