const isPalindrome = (string) => {
    const lowercasedString = string.toLowerCase();
    return lowercasedString.split('').reverse().join('') === lowercasedString;
 
};

console.log(isPalindrome("Привет"));
console.log(isPalindrome("шалаш"));