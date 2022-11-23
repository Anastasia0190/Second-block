const checkStringLength = function (str, num) {
    return str.length > num ? 'String is too long!' : str; 
}
  
console.log(checkStringLength('Hi', 2));
console.log(checkStringLength('Hi', 1));