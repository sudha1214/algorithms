var a =[1,3,5,7];
var b =[2,4,6,8]

function mergerArray(a,b) {
var mergeA = [];
 if(a.length === 0) return b;
 else if(b.length === 0) return a;
 var aElem = a[0], bElem = b[0], i=1, j=1
 while(aElem || bElem) {
 	if(!bElem ||(aElem < bElem)) {
  	mergeA.push(aElem);
    aElem = a[i++];
  }
  else {
  	mergeA.push(bElem);
    bElem = b[j++]
  }
 }
 return mergeA;
}

console.log(mergerArray(a,b));

//document.getElementById("h").innerHTML = mergerArray(a,[]);