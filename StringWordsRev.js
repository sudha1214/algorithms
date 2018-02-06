function revWords(s) {
    s = s.split(' ');
    var len = s.length-1,
    tmp;
for (var i = 0; i <len; i++) {
  tmp = s[len];
  s[len] = s[i];
  s[i] = tmp;
  len--;
}
return s.join(' ');
}

console.log(revWords("hi Iam student"));//student a Iam hi

function reverseInPlace(str) {
  var s = str.split(' ');
  var len = s.length-1;
  var newStr =[];
  s.forEach(element => {
    newStr.push(element.split('').reverse().join(''));
    
  });
  return newStr.join(' ');
}
console.log(reverseInPlace("hi Iam a student"));//ih maI a tneduts