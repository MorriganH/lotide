const countLetters = function(string) {
  let counts = {};
  for (let character of string) {
    if (character !== " ") {
      if (counts[character]) {
        counts[character]++;
      } else {
        counts[character] = 1;
      }
    }
  }
  return counts;
};

module.exports = countLetters;