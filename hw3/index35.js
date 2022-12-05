const users = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female',
      ipAddress: '26.58.193.2',
    },
    {
      id: 2,
      first_name: 'Petr',
      last_name: 'Jackson',
      email: 'gfrediani1@senate.gov',
      gender: 'Male',
      ipAddress: '229.179.4.212',
    },
];



const sortUsers = (users) => {
const resultAll = {};
resultAll.men = [];
resultAll.women = [];

 
    users.forEach((user) => {
      const isMale = user.gender.toLowerCase() === 'male';
      const {first_name, last_name, ... other} = user; 
      const newObject = {...other};   
      const firstName = user.first_name;
      const lastName = user.last_name;
      const fullName = firstName + " " + lastName; 
      newObject.fullName = fullName;
      

      if (isMale) {
        resultAll.men.push(newObject);
    }
        else {
        resultAll.women.push(newObject);
        }
        
    });
  
    return resultAll;

}
console.log(sortUsers(users));