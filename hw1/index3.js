const min = function (a, b) {
    return (a <= b) ? a : b; 
  }
  
console.log(min(3, -1));

// Cпособ с if
  
const min2 = function (a, b) {
    if (a <= b) {
      return a;
    } else {
      return b;
    } 
  }
  
console.log(min(1, -2));