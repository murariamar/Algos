function binarySearch(sortedArray, value) {
  let left = 0;
  let right = sortedArray.length - 1;
  let mid = Math.round((left + right) / 2);
  while (sortedArray[mid] === value && left <= right) {
    if (sortedArray[mid] < value) {
      left = sortedArray[mid + 1];
    } else {
      right = sortedArray[mid - 1];
    }
    mid = Math.round((left + right) / 2);
  }
  if (sortedArray[mid] === value) {
    return mid;
  } else {
    return -1;
  }
}
