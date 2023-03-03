import { generateRandomNumber } from '../helpers.js';
import { 
  bubbleSort,
  browserSort, 
  countingSort, 
  heapSort,
  insertionSort,
  mergeSort,
 } from './index.js';

describe('sorting', () => {
  let arrToSort;
  beforeEach(() => {
    arrToSort = generateArray(100000);
  });

  describe('bubbleSort', () => {
    it('should sort array', () => {
      expect(bubbleSort([...arrToSort])).toEqual(browserSort(arrToSort))
    });

    it('should sort empty array', () => {
      expect(bubbleSort([])).toEqual([]);
    });

    it('should sort one element array', () => {
      expect(bubbleSort([1])).toEqual([1]);
    });

    it('should sort two elements array', () => {
      arrToSort = [2, 1];
      const sortedArray = [1, 2];
      
      expect(mergeSort(arrToSort)).toEqual(sortedArray);
    });

    it('should not sort sorted simple arr', () => {
      arrToSort = [2, 3, 5, 8, 9, 10];
      const sortedArray = [2, 3, 5, 8, 9, 10];
      
      expect(mergeSort(arrToSort)).toEqual(sortedArray);
    });
  });

  describe('countingSort', () => {
    it('should sort array', () => {
      expect(countingSort([...arrToSort])).toEqual(browserSort(arrToSort))
    });

    it('should sort array with gaps between numbers', () => {
      arrToSort = [2000, 3000, 1000];
      expect(countingSort([...arrToSort])).toEqual(browserSort(arrToSort))
    });

    it('should sort array with repeating numbers', () => {
      arrToSort = [1, 0, 3, 1, 3, 1];
      expect(countingSort([...arrToSort])).toEqual(browserSort(arrToSort))
    });
  
    it('should sort empty array', () => {
      expect(countingSort([])).toEqual([]);
    });
  
    it('should sort one element array', () => {
      expect(countingSort([1])).toEqual([1]);
    });

    it('should sort two elements array', () => {
      arrToSort = [2, 1];
      const sortedArray = [1, 2];
      
      expect(mergeSort(arrToSort)).toEqual(sortedArray);
    });

    it('should not sort sorted simple arr', () => {
      arrToSort = [2, 3, 5, 8, 9, 10];
      const sortedArray = [2, 3, 5, 8, 9, 10];
      
      expect(mergeSort(arrToSort)).toEqual(sortedArray);
    });
  });

  describe('heapSort', () => {
    it('should sort simple array', () => {
      arrToSort = [2, 8, 5, 3, 9, 10];
      const sortedArray = [2, 3, 5, 8, 9, 10];

      expect(heapSort([...arrToSort])).toEqual(sortedArray);
    });

    it('should sort array', () => {
      expect(heapSort([...arrToSort])).toEqual(browserSort(arrToSort))
    });

    it('should sort empty array', () => {
      expect(heapSort([])).toEqual([]);
    });

    it('should sort one element array', () => {
      expect(heapSort([1])).toEqual([1]);
    });

    it('should sort two elements array', () => {
      arrToSort = [2, 1];
      const sortedArray = [1, 2];
      
      expect(mergeSort(arrToSort)).toEqual(sortedArray);
    });

    it('should not sort sorted simple arr', () => {
      arrToSort = [2, 3, 5, 8, 9, 10];
      const sortedArray = [2, 3, 5, 8, 9, 10];
      
      expect(mergeSort(arrToSort)).toEqual(sortedArray);
    });
  });

  describe('insertionSort', () => {
    it('should sort simple array', () => {
      arrToSort = [2, 8, 5, 3, 9, 10];
      const sortedArray = [2, 3, 5, 8, 9, 10];

      expect(insertionSort(arrToSort)).toEqual(sortedArray);
    });

    it('should sort array', () => {
      expect(insertionSort([...arrToSort])).toEqual(browserSort(arrToSort))
    });

    it('should sort empty array', () => {
      expect(insertionSort([])).toEqual([]);
    });

    it('should sort one element array', () => {
      expect(insertionSort([1])).toEqual([1]);
    });

    it('should sort two elements array', () => {
      arrToSort = [2, 1];
      const sortedArray = [1, 2];
      
      expect(mergeSort(arrToSort)).toEqual(sortedArray);
    });

    it('should not sort sorted simple arr', () => {
      arrToSort = [2, 3, 5, 8, 9, 10];
      const sortedArray = [2, 3, 5, 8, 9, 10];
      
      expect(mergeSort(arrToSort)).toEqual(sortedArray);
    });
  });

  describe('mergeSort', () => {
    it('should sort simple array', () => {
      arrToSort = [2, 8, 5, 3, 9, 10];
      const sortedArray = [2, 3, 5, 8, 9, 10];
      
      expect(mergeSort(arrToSort)).toEqual(sortedArray);
    });

    it('should sort two elements array', () => {
      arrToSort = [2, 1];
      const sortedArray = [1, 2];
      
      expect(mergeSort(arrToSort)).toEqual(sortedArray);
    });

    it('should not sort sorted simple arr', () => {
      arrToSort = [2, 3, 5, 8, 9, 10];
      const sortedArray = [2, 3, 5, 8, 9, 10];
      
      expect(mergeSort(arrToSort)).toEqual(sortedArray);
    });

    it('should sort array', () => {
      expect(insertionSort([...arrToSort])).toEqual(browserSort(arrToSort))
    });

    it('should sort empty array', () => {
      expect(insertionSort([])).toEqual([]);
    });

    it('should sort one element array', () => {
      expect(insertionSort([1])).toEqual([1]);
    });
  });
});

function generateArray(length) {
  return Array(length).fill(null).map(generateRandomNumber);
}
