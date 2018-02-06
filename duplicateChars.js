var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
var arr = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"]


function removeDup(str) {
    var newStr = '';
    for(var i=0; i<str.length; i++) {
        if(newStr.indexOf(str[i]) === -1) {
            newStr += str[i];
        }
    }
    return newStr;
}

//console.log(removeDup("12341234"))

function removeDupArr(arr) {
    var newArray = [];
    for(var i=0; i<arr.length; i++) {
        if(newArray.indexOf(arr[i]) === -1) {
            newArray.push( arr[i]);
        }
    }
    return newArray;
}

//console.log(removeDupArr(Mynum))

function removeDuplicates(num) {
    var uniqueArray=[],
        hash={};
    for (var x=0; x<num.length; x++) {
      hash[num[x]]=true;
    }
    for (var i in hash) {
        uniqueArray.push(i);
    }
    return uniqueArray;
  }
  
 // console.log(removeDuplicates(arr))

  function removeDuplicates1(num) {
    var uniqueArray=[],
        hash={};
    for (var x=0; x<num.length; x++) {
        if(!(hash[num[x]])) {
            uniqueArray.push(num[x]);
            hash[num[x]]=true;
        } 
    }
    return uniqueArray;
  }
  
  console.log(removeDuplicates1(arr))