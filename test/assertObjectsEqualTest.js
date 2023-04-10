const assertObjectsEqual = require('../assertObjectsEqual');

const shirtObject = {color: 'red', size: 'medium'};
const anotherShirtObject = {size: 'medium', color: 'red'};
assertObjectsEqual(shirtObject,anotherShirtObject);