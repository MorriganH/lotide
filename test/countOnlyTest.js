const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {

  it('should return an object that counts only certain values from an array', () => {
    const firstNames = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];
    const result = countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false});
    assert.deepEqual(result, {Jason: 1, Fang: 2});
  });

  it('should return an empty object if no requested values appear', () => {
    const firstNames = ['Karl', 'Salima', 'Agouhanna', 'Frank', 'Kavith', 'Jasy', 'Salima', 'Fin', 'Joe'];
    const result = countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false});
    assert.deepEqual(result, {});
  });

  it('should return an empty object if given an empty array', () => {
    const firstNames = [];
    const result = countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false});
    assert.deepEqual(result, {});
  });

  it('should return an empty object if given no requested values', () => {
    const firstNames = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];
    const result = countOnly(firstNames, {});
    assert.deepEqual(result, {});
  });
});