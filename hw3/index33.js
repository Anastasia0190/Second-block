const users = [

    {
        id: 1,
        name: 'Alex',
    },
    {
        id: 2,
        name: 'Tamara',
    },
    {
        id: 3,
        name: 'Max',
    },
];

const removeUsers = (users, ids) => {

    const result = users.filter((user) => {
        
        return !ids.includes(user.id);
    });
    
    return result;
};

console.log(removeUsers(users, [2, 3]));
console.log(removeUsers(users, [3]));