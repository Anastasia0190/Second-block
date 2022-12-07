const users = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Tamara",
  },
  {
    id: 3,
    name: "Max",
  },
];

const removeUsers = (users, ids) => {
  return users.filter((user) => !ids.includes(user.id));
};

console.log(removeUsers(users, [2, 3]));
console.log(removeUsers(users, [3]));
