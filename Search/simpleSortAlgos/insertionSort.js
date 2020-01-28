function insertionSort(input) {
  for (let i = 1, len = input.length; i < len; i++) {
    let currentValue = input[i];
    for (let j = i - 1; j >= 0 && input[j] > currentValue; j--) {
      input[j + 1] = input[j];
    }
    input[j + 1] = currentValue;
  }
}

// insertion sort is good at online data i.e dynamic data to be sorted
