function count(str) {
  var compressString = '';
  var freq= 1;
  for (var  i=0; i< str.length; i++) {
    if(str[i] === str[i+1]) {
      freq++;
    } else {
    compressString  += str.charAt(i)+ (freq>1 ? freq : '');
    freq= 1;
    }
}

return compressString;
}
console.log(count("accccadd"));




function ff(str) {
  var compressString = '';
for (var i = 0; i < str.length; i++) 
{
 var freq = 1;
 while((i+1)<str.length && str.charAt(i) == str.charAt(i+1))
  {
    freq++;
    i++;
  }
  compressString = compressString + str.charAt(i)+ (freq>1 ? freq : '');
}
return compressString;
}

console.log(ff("accccadd"));