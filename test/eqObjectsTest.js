const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

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