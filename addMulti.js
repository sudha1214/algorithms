function add(x,y) {
  if(y !== undefined) {
    return x + y;
  } else {
    return function(y) {
      return x + y;
    }
  }
}
function sum(x) {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}
console.log(add(2,3));
console.log(add(2)(3));

function mul (x) {
    return function (y) { // anonymous function 
        return function (z) { // anonymous function 
            return x * y * z; 
        };
    };
}

console.log(mul(2)(3)(1));