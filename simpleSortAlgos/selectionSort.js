function selectionSort(input) {
  for (let i = 0, len = input.length; i < len; i++) {
    let minNumIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (input[minNumIndex] > input[j]) {
        minNumIndex = j;
      }
    }
    if (minNumIndex !== i) {
      [input[i], input[minNumIndex]] = [input[minNumIndex], input[i]];
    }
  }
  return input;
}

// selection sort might be better than bubble sort as number of swaps are minimum
