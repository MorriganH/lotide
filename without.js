const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let index = 0; index < source.length; index++) {
    for (let removeIndex = 0; removeIndex < itemsToRemove.length; removeIndex++) {
      //if source value same as remove value, check next source value
      if (source[index] === itemsToRemove[removeIndex]) {
        break;
        //if source value has been checked against every remove value and is still ok, add to newArray
      } else if (removeIndex === itemsToRemove.length - 1) {
        newArray.push(source[index]);
      }
    }
  }
  return newArray;
};

module.exports = without;