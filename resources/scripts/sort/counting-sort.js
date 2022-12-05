export const countingSort = arr => {
  const maxEl = arr.length && Math.max(...arr);
  const helpArr = [0].concat(arr.reduce(
    (acc, el) => {
      acc[el]++;
      return acc;
    },
    Array(maxEl).fill(0),
  ).reduce(
    (acc, el, index) => {
      if (index === 0) {
        acc[index] = el;
        return acc;
      }
      if (index > maxEl) {
        return acc;
      }
      acc[index] = el + acc[index - 1];
      return acc;
    },
    Array(maxEl).fill(0),
  ));

  return arr.reduce(
    (acc, el) => {
      const startIndex = helpArr[el];
      acc[startIndex] = el;
      helpArr[el]++;
      return acc;
    },
    Array(arr.length).fill(null),
  );
};
