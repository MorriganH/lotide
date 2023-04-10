const letterPositions = function(sentence) {
  const results = {};
  for (let character = 0; character < sentence.length; character++) {
    const currentChara = sentence[character];
    if (currentChara !== " ") {
      if (results[currentChara]) {
        results[currentChara].push(character);
      } else {
        results[currentChara] = [character];
      }
    }
  }
  return results;
};

module.exports = letterPositions;