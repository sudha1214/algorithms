function foo(x) {
    var temp = 3;
    return function bar(y) {
        //console.log(x+y + (temp++));
    }
}

foo(2)(10) //15
foo(2)(10) //15

var ref = foo(2);
ref(10); //15
ref(10); //16


function missingNumber(arr){
    var n = arr.length+1, 
    sum = 0,

    expectedSum = n* (n+1)/2;
    for(var i = 0, len = arr.length; i < len; i++){
      sum += arr[i];
    }
    //console.log('expectedSum    ',expectedSum, 'sum----', sum)
    return expectedSum - sum;
  }
//console.log(missingNumber([4,1,3]))  

var obj = {a:'n', p:'k'};

for(i in obj) {
    //console.log(obj[i]); // n and k
}

//console.log(obj.length) // undefined

String.prototype.reverse = function() {
    var str = this.toString();
    var newString='';
    if(str.length ==1 ) return str;
    else {
        for(var i= str.length-1; i >=0; i--) {
        newString += str[i];
        }
      }
      return newString
}


//console.log("hello".reverse());


String.prototype.repeatify = function(num) {
    var str = this.toString();
    var newStr = '';
    if(num === 1) return str;
    for (var i = 0 ; i< num; i++) {
        newStr += str;
    }
     return newStr;
   }
   
   //console.log("hello".repeatify(3));


   String.prototype.reverse = function (){
    if(!this || this.length <2) return this;
    
    return this.split('').reverse().join('');
  }

  console.log("hee".reverse());
  