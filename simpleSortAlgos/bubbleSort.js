 function bubbleSort(input) {
  for (let i = input.length; i > 0; i--) {
    let hasSwaps = false;
    for (let j = 0; j < i - 1; j++) {
      if (input[j] > input[j + 1]) {
        [input[j], input[j + 1]] = [input[j + 1], input[j]];
        hasSwaps = true;
      }
    }

    if (!hasSwaps) {
      break;
    }
  }
  return input;
}

// use bubble sort only you know if your data is nearly sortedas its time complexity is o(n2) in worst case
