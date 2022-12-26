const breakUpCamelCasing = (string) => {
  let result = "";
  for (const letter of string) {
    const isBigLetter = letter === letter.toUpperCase();

    result += `${isBigLetter ? " " : ""}${letter}`;
  }
  return result;
};

console.log(breakUpCamelCasing("camelCasing"));
console.log(breakUpCamelCasing("identifier"));
console.log(breakUpCamelCasing("helloMyDearFriend"));

const breakUpCamelCasing1 = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    string[i] !== string[i].toUpperCase()
      ? (result += string[i])
      : (result += ` ${string[i]}`);
  }
  return result;
};

console.log(breakUpCamelCasing1("camelCasing"));
console.log(breakUpCamelCasing1("identifier"));
console.log(breakUpCamelCasing1("helloMyDearFriend"));

const breakUpCamelCasing2 = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    string[i].charCodeAt(0) !== string[i].toUpperCase().charCodeAt(0)
      ? (result += string[i])
      : (result += ` ${string[i]}`);
  }
  return result;
};

console.log(breakUpCamelCasing2("camelCasing"));
console.log(breakUpCamelCasing2("identifier"));
console.log(breakUpCamelCasing2("helloMyDearFriend"));
