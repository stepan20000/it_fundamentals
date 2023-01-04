import { MAX_NUMBER_TO_SORT } from "./const.js";

export const generateRandomNumber = () => Math.floor(Math.random() * MAX_NUMBER_TO_SORT);

export const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
