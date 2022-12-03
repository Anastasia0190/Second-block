const userList = ["Alex", "alex", "Max", "Vika", "Petr", "Alexandra"];
const blacklistedLetters = ["a", "p"];

const filterUsers = (users, blacklistedLetters) => {
  if (!Array.isArray(users) || !Array.isArray(blacklistedLetters)) {
    return;
  }

  const result = users.filter((user) => {
    const lowercasedUsernameFirstLetter = user[0].toLowerCase();
    return !blacklistedLetters.includes(lowercasedUsernameFirstLetter);
  });

  return result;
};

console.log(filterUsers(userList, blacklistedLetters));


 
const newUserList = [];


for (let i = 0; i < userList.length; i++) {
  const user = userList[i];
  const lowercasedUsernameFirstLetter = user[0].toLowerCase();

  if (!blacklistedLetters.includes(lowercasedUsernameFirstLetter)) {
    newUserList.push(user);
  }
    }

console.log((newUserList));


let i = 0;

while (i < userList.length) {
  const user = userList[i];
  const lowercasedUsernameFirstLetter = user[0].toLowerCase();

  if (!blacklistedLetters.includes(lowercasedUsernameFirstLetter)) {
    newUserList.push(user);
  }

  i++;
}

console.log(newUserList);


for (const user of userList) {
  const lowercasedUsernameFirstLetter = user[0].toLowerCase();

  if (!blacklistedLetters.includes(lowercasedUsernameFirstLetter)) {
    newUserList.push(user);
  }
}

console.log(newUserList);
