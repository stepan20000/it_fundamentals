import { generateRandomNumber } from '../helpers.js';
import { bubbleSort, browserSort, countingSort } from './index.js';

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
  });

  fdescribe('countingSort', () => {
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
  });
});

function generateArray(length) {
  return Array(length).fill(null).map(generateRandomNumber);
}
