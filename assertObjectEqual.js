const eqArrays = function(arrayA, arrayB) {
  for (let index = 0; index < arrayA.length || index < arrayB.length; index++) {
    if (arrayA[index] !== arrayB[index]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let keyObj1 in object1) {
    let value1 = object1[keyObj1];
    let value2 = object2[keyObj1];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    return console.log(`\u{1F4B9}\u{1F4B9}\u{1F4B9} Assertation Passed, objects are equal.`);
  }
  return console.log(`\u274C\u274C\u274C Assertation Failed: objects are not equal.`);
};

const shirtObject = {color: 'red', size: 'medium'};
const anotherShirtObject = {size: 'medium', color: 'blue'};
assertObjectsEqual(shirtObject,anotherShirtObject);