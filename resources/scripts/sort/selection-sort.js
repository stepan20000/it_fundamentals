import { swap } from "../helpers.js";

export const selectionSort = arr => {
  const n = arr.length;
  let minIndex;
  let j;

  for (let i = 0; i < n - 1; i++) {
    minIndex = i;
    j = i + 1;

    for(; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, minIndex, i);
  }

  return arr;
};
