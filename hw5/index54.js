const getPairsOfGloves = (array) => {
    return array.reduce((prev, cur) => {
        const isEven = cur % 2 === 0;
        // return stack[value] && isEven ? `${(stack/2)}` : `${stack[value]}`
        prev[cur] = (prev[cur] || 0) + 1;
  return isEven ? `${prev[cur]/2} пар перчаток` : cur;
        }, []);
  };
 
  console.log(getPairsOfGloves(["red", "green", "red", "blue", "blue"]));
  console.log(getPairsOfGloves(["red", "red", "red", "red", "red", "red"]));