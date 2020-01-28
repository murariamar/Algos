function mergeSort(input) {
  if (input <= 1) {
    return input;
  }
  const mid = Math.floor(input.length / 2);
  const left = mergeSort(input.slice(0, mid));
  const right = mergeSort(input.slice(mid + 1));
  return merge(left, right);
}

function merge(input1, input2) {
  let result = [];
  let i = 0,
    j = 0;
  while (i < input1.length && j < input2.length) {
    if (input1[i] > input2[j]) {
      result.push(input2[j]);
      j++;
    } else {
      result.push(input1[i]);
      i++;
    }
  }

  if (j === input2.length - 1) {
    result = [...result, ...input1.slice(i, input1.length - 1)];
  } else if (i === input1.length - 1) {
    result = [...result, ...input2.slice(j, input2.length - 1)];
  }
  return result;
}
