const lettersList = ["a", "B", "c"];

const changeCase = (letters) => {
  if (!Array.isArray(letters)) {
    return;
  }

  return letters.map((letter) => {
    if (letter === letter.toUpperCase()) {
        return letter.toLowerCase();
    }  
    
    return letter.toUpperCase();
  });
 
};

console.log(changeCase(lettersList));



const newLettersList = [];

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
