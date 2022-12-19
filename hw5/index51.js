const breakUpCamelCasing1 = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    string[i] !== string[i].toUpperCase() || i === 0
      ? (result += string[i])
      : (result += ` ${string[i]}`);
  }
  return result;
};

console.log(breakUpCamelCasing1("camelCasing"));
console.log(breakUpCamelCasing1("identifier"));
console.log(breakUpCamelCasing1("HelloMyDearFriend"));

const breakUpCamelCasing2 = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    string[i].charCodeAt(0) !== string[i].toUpperCase().charCodeAt(0) || i === 0
      ? (result += string[i])
      : (result += ` ${string[i]}`);
  }
  return result;
};

console.log(breakUpCamelCasing2("camelCasing"));
console.log(breakUpCamelCasing2("identifier"));
console.log(breakUpCamelCasing2("HelloMyDearFriend"));
