export const bubbleSort = arr => {
  let maxIndex = arr.length - 1;
  let elementsWereReplaced;
  const replaceElements = i => {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  };

  const goThroughArray = () => {
    elementsWereReplaced = false;
    
    for(let i = 0; i < maxIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        elementsWereReplaced = true;
        replaceElements(i);
      }
    }
    maxIndex--;
  }

  do {
    goThroughArray();
  } while (elementsWereReplaced && maxIndex > 0);

  return arr;
};
