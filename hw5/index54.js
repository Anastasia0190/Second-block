const getPairsOfGloves = (gloves) => {
  const GlovesAmountMap = new Map();

  gloves.forEach((glove) => {
    if (GlovesAmountMap.has(glove)) {
      GlovesAmountMap.set(glove, GlovesAmountMap.get(glove) + 1);
    } else {
      GlovesAmountMap.set(glove, 1);
    }
  });

  return Array.from(GlovesAmountMap).reduce((result, [gloveColor, amount]) => {
    if (amount > 1) {
      result[gloveColor] = Math.floor(amount / 2);
    }
    return result;
  }, {});
};

console.log(getPairsOfGloves(["red", "green", "red", "blue", "blue"]));
console.log(getPairsOfGloves(["red", "red", "red", "red", "red", "red"]));
