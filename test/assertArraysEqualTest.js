const assertArraysEqual = require('../assertArraysEqual');

const numberTest = [1, 2, 3];
assertArraysEqual(numberTest, [1, 2, 3]);

const stringTest = ['Yoyo', 'Lighthouse', 'Labs'];
assertArraysEqual(stringTest, ['Yoyo', 'Lighthouse', 'Labs']);

const mixedTest = ['Dave', 43, 'Brooklyn'];
assertArraysEqual(mixedTest, ['Dave', 43, 'Brooklyn']);