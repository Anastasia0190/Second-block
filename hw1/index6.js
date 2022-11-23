const someFn = function (str) {
    if (str.length % 2 === 0) {
        return str[0].toUpperCase() + str.slice(1, -1).toLowerCase() + str[str.length-1].toUpperCase();
    }
     
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
    
}

console.log(someFn('пиТеР'));
console.log(someFn('javaScript'));