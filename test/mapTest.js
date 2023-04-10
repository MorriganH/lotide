const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ['ground', 'control', 'to', 'major', 'tom'];

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ['g','c','t','m','t']);
assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t'])
assertArraysEqual(map(words, word => word[1]), ['r','o','o','a','o'])
assertArraysEqual(map(words, word => word[word.length - 1]), ['d','l','o','r','m'])
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3])
