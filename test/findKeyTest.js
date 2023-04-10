const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {

  it('should return the first key that meets the given criteria', () => {
    const movies = {
      "Blue Hill": {stars: 1},
      "Akaleri": {stars: 3},
      "noma": {stars: 2},
      "elBulli": {stars: 3},
      "Ora": {stars: 2},
      "Akelarre": {stars: 3}
    };
    assert.strictEqual(findKey(movies, x => x.stars === 2),'noma');
  });

  it('should return undefined if no key meets given criteria', () => {
    const movies = {
      "Blue Hill": {stars: 1},
      "Akaleri": {stars: 3},
      "noma": {stars: 2},
      "elBulli": {stars: 3},
      "Ora": {stars: 2},
      "Akelarre": {stars: 3}
    };
    assert.isUndefined(findKey(movies, x => x.stars === 4));
  });
});