const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`\u{1F4B9}\u{1F4B9}\u{1F4B9} Assertation Passed: ${actual} === ${expected}`);
  }
  return console.log(`\u274C\u274C\u274C Assertation Failed: ${actual} !== ${expected}`);
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let keyObj1 in object1) {
    if (object1[keyObj1] !== object2[keyObj1]) {
      return false;
    }
  }
  return true;
};


const shirtObject = {color: 'red', size: 'medium'};
const anotherShirtObject = {size: 'medium', color: 'red'};
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {size: 'medium', color: 'red', sleeveLength: 'long'};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);