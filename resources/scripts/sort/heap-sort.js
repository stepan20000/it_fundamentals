import { swap } from "../helpers.js";

export const heapSort = arr => {
  buildMaxHeap(arr);
  
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, i, 0);
    heapify(arr, i, 0);
  }

  return arr;
};

function buildMaxHeap(arr) {
  let length = arr.length;
  for(let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(arr, length, i);
  }
}

function heapify(arr, maxIndex, target) {
  // max heap assuming that part of array is already sorted
  let largest = target;
  let left = target * 2 + 1;
  let right = target * 2 + 2;

  if (left < maxIndex && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < maxIndex && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != target) {
    swap(arr, largest, target);

    heapify(arr, maxIndex, largest);
  }
} 
