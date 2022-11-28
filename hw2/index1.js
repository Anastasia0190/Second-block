const userList = ["Alex", "alex", "Max", "Vika", "Petr", "Alexandra"];
const BLACKLISTED_LETTERS = ["a", "p"];

const filterUsers = (users, BLACKLISTED_LETTERS) => {
  if (!Array.isArray(users, BLACKLISTED_LETTERS)) {
    return;
  }

  const result = users.filter((user) => {
    const lowercasedUsernameFirstLetter = user[0].toLowerCase();
    return !BLACKLISTED_LETTERS.includes(lowercasedUsernameFirstLetter);
  });

  return result;
};

console.log(filterUsers(userList, BLACKLISTED_LETTERS));



let newUserList = [];

for (let i = 0; i < userList.length; i++) {
  const user = userList[i];
  const lowercasedUsernameFirstLetter = user[0].toLowerCase();

  if (!BLACKLISTED_LETTERS.includes(lowercasedUsernameFirstLetter)) {
    newUserList.push(user);
  }
}

console.log(newUserList);


let i = 0;

while (i < userList.length) {
  const user = userList[i];
  const lowercasedUsernameFirstLetter = user[0].toLowerCase();

  if (!BLACKLISTED_LETTERS.includes(lowercasedUsernameFirstLetter)) {
    newUserList.push(user);
  }

  i++;
}

console.log(newUserList);


for (const user of userList) {
  const lowercasedUsernameFirstLetter = user[0].toLowerCase();

  if (!BLACKLISTED_LETTERS.includes(lowercasedUsernameFirstLetter)) {
    newUserList.push(user);
  }
}

console.log(newUserList);
