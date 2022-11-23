const min = function (a, b) {
    if (a < b) {
      return a;
    }
    if (a > b) {
      return b;
    }
    
    return 'Numbers are equal'
    
  }
  
console.log(min(1, -2));
console.log(min(1, 1));