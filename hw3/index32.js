const wordsList = ["hello", "wOrLd"];

const changeCase = (words) => {
  if (!Array.isArray(words)) {
    return;
  }

  return words.map((word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
};

console.log(changeCase(wordsList));
