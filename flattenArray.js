function flattenRed(list) {
    return list.reduce(function (a, b) {
        console.log("A----" + a +"   b----"+b , Array.isArray(b))
        return a.concat(Array.isArray(b) ? flatten(b) : b);
    }, []);
};
var arr = [[1,2],[[3]]];
console.log(flattenRed(arr));

//without using predefined functions.
function flatten(arr) {
    if(!Array.isArray(arr)) {
      return [arr];
    }
    var array = [];
    for(var i = 0; i < arr.length; i++) {
      array = array.concat(flatten(arr[i]));
    }
    return array;
  }

console.log(flatten(arr));