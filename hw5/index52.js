const findMissingNumber = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const nextNumber = numbers[i + 1];
    const numberAfterNextNumber = numbers[i + 2];

    const currentDifference = nextNumber - currentNumber;
    const nextDifference = numberAfterNextNumber - nextNumber;

    if (currentDifference !== nextDifference) {
      return currentNumber + nextDifference;
    }
  }
};
console.log(findMissingNumber([1, 3, 5, 9, 11]));

const findMissing = (arr = []) => {
  if (arr.length <= 2) {
    return;
  }
  const { length } = arr;
  const step = arr[1] - arr[0];
  const diff = arr[length - 1] - arr[length - 2];
  if (step !== diff) {
    if (step == 2 * diff) {
      return arr[0] + diff;
    } else {
      return arr[length - 1] - step;
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    const result = arr[i] + step;
    if (arr[i + 1] - arr[i] !== step) {
      return result;
    }
  }
  return arr[0];
};

console.log(findMissing([1, 3, 5, 9, 11]));
