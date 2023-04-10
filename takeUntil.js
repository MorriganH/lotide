const takeUntil = function(array, callback) {
  let until = [];
  for (let val of array) {
    if (callback(val)) {
      break;
    }
    until.push(val);
  }
  return until;
};

module.exports = takeUntil;