function naiveSearch(input, pattern) {
  let occurences = 0;
  for (let i = 0, len = input.length; i < len; i++) {
    if (input[i] = pattern[0]) {
      for(let j = 1, patternLen = pattern.length; j++ ) {
        if (input[i + j] === pattern[j]) {
          if (j === patternLen -1) {
            occurences += 1;
          }
        } else {
          break;
        }
      }
    }
  }
  return occurences;
}