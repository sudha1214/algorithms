
// Remove a specific number of characters from a string

function stringTruncate(str, length) {
  if( (typeof str === 'string')) {
    return str.slice(0, length);
  }
  else {
    return "not a sting"
  }
}

console.log(stringTruncate("123", 2));   // 12



//Without using String function:

function Truncate(input,index) {
  var str="";
  var arr = input.split("");
  for (var i = 0; i < index; i++) { 
    str += arr[i];

  }
  return str;

}
console.log(Truncate("sudha",2));   // su