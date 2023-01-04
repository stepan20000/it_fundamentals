import { swap } from "../helpers.js";

export const bubbleSort = arr => {
  let maxIndex = arr.length - 1;
  let elementsWereReplaced;

  const goThroughArray = () => {
    elementsWereReplaced = false;
    
    for(let i = 0; i < maxIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        elementsWereReplaced = true;
        swap(arr, i, i + 1);
      }
    }
    maxIndex--;
  }

  do {
    goThroughArray();
  } while (elementsWereReplaced && maxIndex > 0);

  return arr;
};
