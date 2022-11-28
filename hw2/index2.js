const lettersList = ["a", "B", "c"];

const changeCase = (letters) => {
  if (!Array.isArray(letters)) {
    return;
  }

  const result = letters.map((letter) => {
    const isLetterCapital = letter === letter.toUpperCase();
    return isLetterCapital ? letter.toLowerCase() : letter.toUpperCase();
  });

  return result;
};

console.log(changeCase(lettersList));



let newLettersList = [];

for (let i = 0; i < lettersList.length; i++) {
  const letter = lettersList[i];

  if (letter === letter.toUpperCase()) {
    newLettersList.push(letter.toLowerCase());
  } else {
    newLettersList.push(letter.toUpperCase());
  }
}

console.log(newLettersList);


let i = 0;
while (i < lettersList.length) {
  const letter = lettersList[i];

  if (letter === letter.toUpperCase()) {
    newLettersList.push(letter.toLowerCase());
  } else {
    newLettersList.push(letter.toUpperCase());
  }
  i++;
}


console.log(newLettersList);

for (const letter of lettersList) {
  if (letter === letter.toUpperCase()) {
    newLettersList.push(letter.toLowerCase());
  } else {
    newLettersList.push(letter.toUpperCase());
  }
}

console.log(newLettersList);
