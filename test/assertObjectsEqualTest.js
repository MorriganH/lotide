const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

describe('#assertObjectsEqual', () => {

  it('should return true if two objects are equal', () => {
    const shirtObject = {color: 'red', size: 'medium'};
    const anotherShirtObject = {size: 'medium', color: 'red'};
    assert.isTrue(assertObjectsEqual(shirtObject, anotherShirtObject));
  });

  it('should return false if two objects are not equal', () => {
    const shirtObject = {color: 'red', size: 'medium'};
    const anotherShirtObject = {size: 'medium', color: 'blue'};
    assert.isFalse(assertObjectsEqual(shirtObject, anotherShirtObject));
  });
});
