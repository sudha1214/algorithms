function fact(num) {
    if(num === 1 || num == 2) {
        return num;
    }
    return num * fact(num -1);
}

//console.log(fact(5));

function factorialize(num) {
    var result = 1;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
        console.log(num)
      result *= num;
      num--;
    }
    return result;
  }
  console.log(factorialize(0));

  function factorialize1(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i =num-1 ; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  console.log(factorialize1(5));

  function sFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval *= i;
    return rval;
}
console.log(sFact(5));