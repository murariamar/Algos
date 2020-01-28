function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function pivot(arr, startIndex = 0, endIndex = arr.length + 1) {
  let swapIndex = startIndex;
  const pivot = arr[swapIndex];
  for (let i = startIndex + 1; i < endIndex; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }
  [arr[startIndex], arr[swapIndex]] = [arr[swapIndex], arr[startIndex]];
  return swapIndex;
}

// performance depends on selection of pivot i.e if pivot is always smallest/largest number it may go to o(n2)
