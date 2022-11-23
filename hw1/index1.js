const sayHello = function (name) {
    const SPECIAL_NAME = 'mark';
    return name.toLowerCase() === SPECIAL_NAME ? `Hi, ${name}!` : `Hello, ${name}!`;
    
}

console.log(sayHello('Mark'));
console.log(sayHello('John'));