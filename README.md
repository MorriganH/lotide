# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @morriganh/lotide`

**Require it:**

`const _ = require('@morriganh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: asserts to console if two arrays are equal
* `function2(assertEqual)`: asserts to console if two primitive values are equal
* `function3(assertObjectsEqual)`: asserts to console if tow objects are equal
* `function3(countLetters)`: keeps a tally of how many times each letter appears in a string
* `function3(countOnly)`: keeps a tally of how many times requested values appear in an array
* `function3(eqArrays)`: determines if two arrays are equal
* `function3(eqObjects)`: determines if two objects are equal
* `function3(findKey)`: returns the first key in an object that meets a given criteria
* `function3(findKeyByValue)`: when given a value, returns a key that has that value from an object
* `function3(flatten)`: flattens a two-dimensional array into a one-dimensional array
* `function3(head)`: returns the first element of an array
* `function3(letterPositions)`: stores every index of each letter in a string into an object
* `function3(map)`: performs some transformation on each element of an array and returns a new array
* `function3(middle)`: returns the central values from an array
* `function3(tail)`: returns all but the first element of an array
* `function3(takeUntil)`: returns the beginning of a given array, up until a given criteria is met
* `function3(without)`: returns a new array with specified values removed from an origional array