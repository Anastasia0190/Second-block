const calculateFactorial1 = (number) => {
  if (number === 0) {
    return;
  }

  return number != 1 ? number * calculateFactorial1(number - 1) : 1;
};

console.log(calculateFactorial1(10));

const calculateFactorial2 = (number) => {
  if (number === 0) {
    return;
  }

  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

console.log(calculateFactorial2(10));
