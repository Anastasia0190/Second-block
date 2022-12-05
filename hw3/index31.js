const numbersList = [1, 2, 3, 4];

const changeNumbers = (numbers) => {
  if (!Array.isArray(numbers)) {
    return;
  }

  return numbers.map((number) => {
    if (number % 2 === 0) {
        return number + 1;
    }  
    
    return number - 1;
  });
 
};

console.log(changeNumbers(numbersList));