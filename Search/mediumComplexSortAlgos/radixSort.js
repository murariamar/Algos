function radixSort(arr) {
  const maxDigits = getMostDigits(arr);

  for (let i = 0; i < maxDigits; i++) {
    let result = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      result[digit].push(arr[j]);
    }
    arr = [].concat(...result);
  }
  return nums;
}

// time complexity o(nk) n = size of array, k = max number of digits

function getDigit(num, position) {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

function getMostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0, len = arr.length; i < len; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
