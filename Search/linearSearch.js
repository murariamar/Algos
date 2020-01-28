function linearSearch(input, searchTerm) {
  for (let i = 0, len = input.length; i < len; i++) {
    if (input[i] === searchTerm) {
      return i;
    }
  }
  return -1;
}
