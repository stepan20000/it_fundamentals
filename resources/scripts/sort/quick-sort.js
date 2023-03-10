import { swap } from "../helpers.js";

const pivotLastPartition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;

  for(let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }

  }
  swap(arr, i + 1, high);
  
  return i + 1;
};

const quickSortPivotLastPrivate = (arr, low, high) => {
  if (low < high) {
    const pi = pivotLastPartition(arr, low, high);
    quickSortPivotLastPrivate(arr, low, pi - 1);
    quickSortPivotLastPrivate(arr, pi + 1, high);
  }

  return arr;
};

export const quickSortPivotLast = arr => quickSortPivotLastPrivate(arr, 0, arr.length -1);

const getMediumOfThreePivot = (arr, low, high) => {
  const medium = Math.floor((high - low) / 2);
  if (medium == low) {
    return arr[high];
  }

  const tempArr = [arr[low], arr[medium], arr[high]].sort((a, b) => a > b ? 1 : -1);
  arr[low] = tempArr[0];
  arr[medium] = tempArr[1];
  arr[high] = tempArr[2];
};

const medianOfTreePartition = (arr, low, high) => {
  const pivot = getMediumOfThreePivot(arr, low, high);
  let i = low - 1;

  for(let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }

  }
  swap(arr, i + 1, high);
  
  return i + 1;
};

const quickMedianOfTreePrivate = (arr, low, high) => {
  if (low < high) {
    const pi = medianOfTreePartition(arr, low, high);
    quickMedianOfTreePrivate(arr, low, pi - 1);
    quickMedianOfTreePrivate(arr, pi + 1, high);
  }

  return arr;
};

export const quickSortMedianOfTree = arr => quickSortPivotLastPrivate(arr, 0, arr.length -1);
