const users = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "Female",
    ipAddress: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ipAddress: "229.179.4.212",
  },
];

const sortUsers = (users) => {
  const result = { men: [], women: [] };

  users.forEach((user) => {
    const isMale = user.gender.toLowerCase() === "male";
    const { first_name, last_name, ...other } = user;
    const fullName = `${user.first_name} ${user.last_name}`;
    const newObject = { ...other, fullName};

    const gender = isMale ? result.men.push(newObject) : result.women.push(newObject);
  });

  return result;
};
console.log(sortUsers(users));

const sortByGender = (users) => {
  return users.reduce((genderList, { first_name, last_name, ...otherInfo }) => {
    const gender = otherInfo.gender || 'others';

    const userToPush = {
      fullName: `${first_name} ${last_name}`,
      ...otherInfo,
    };

    if (!genderList[gender]) {
      genderList[gender] = [];
    }

    genderList[gender].push(userToPush);

    return genderList;
  }, {});
};

console.log(sortByGender(users));
