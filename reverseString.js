
// prints the given string in reverse order.

function reverse(str){
  if(str.length ==1) {
    return str;
  } else {
    return str.charAt(str.length-1) + reverse(str.substring(0, str.length-1));
  }
}

console.log(reverse("sudh"));  // ahdus


function reverse1(str) {
  var newString ='';
  if(str.length ==1) {
    newString = str;
  } else {
    for(var i= str.length-1; i >=0; i--) {
    newString += str[i];
    }
  }
  return newString
}
//console.log(reverse1("sudha"));

function reverse3(s) {
  s = s.split('');
  var len = s.length,
      tmp;
  for (var i=0; i < len; i++) {
    tmp = s[len];
    s[len] = s[i];
    s[i] = tmp;  
    len--;  
  }
 return s.join('');
}

console.log(reverse3("sudha"));

function revOptimized(str) {
  str = str.split('');
  var len = str.length;
  var temp;
  if(len === 1) {
    return str;
  } 
  for(var i=0; i<len/2; i++) {
    temp = str[i];
    str[i] = str[(len-1)-i]
    str[(len-1)-i] = temp;
  }
  
  return str.join('');
}
console.log(revOptimized("sudha"))