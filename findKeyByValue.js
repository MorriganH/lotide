const findKeyByValue = function(object, value) {
  let foundKey;
  for (let key in object) {
    if (object[key] === value) {
      foundKey = key;
    }
  }
  return foundKey;
};

module.exports = findKeyByValue;