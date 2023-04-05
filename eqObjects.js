const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`\u{1F4B9}\u{1F4B9}\u{1F4B9} Assertation Passed: ${actual} === ${expected}`);
  }
  return console.log(`\u274C\u274C\u274C Assertation Failed: ${actual} !== ${expected}`);
};

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

/*
const shirtObject = {color: 'red', size: 'medium'};
const anotherShirtObject = {size: 'medium', color: 'red'};
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {size: 'medium', color: 'red', sleeveLength: 'long'};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = {colors: ['red', 'blue'], size: 'medium'};
const anotherMultiColorShirtObject = {size: 'medium', colors: ['red', 'blue']};
const anotherMultiColorShirtObject1 = {size: 'large', colors: ['red', 'blue']};
const anotherMultiColorShirtObject2 = {size: 'medium', colors: ['blue', 'red']};
const anotherMultiColorShirtObject3 = {size: 'medium', colors: 'red'};
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject1), false);
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject2), false);
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject3), false);

const longSleeveMultiColorShirtObject = {size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long'};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
*/