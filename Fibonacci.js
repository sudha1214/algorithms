function fib(num) {
    var a = [];
    a[0] = 0;
    a[1] = a[2] = 1;
    for(var i=2; i<num; i++) {
        a[i] = a[i-1] + a[i-2];
    }
    return a;
}
console.log(fib(6));

//return fibonacci position

function fibPos(pos) {
    var a = [];
    a[0] = 0;
    a[1] = a[2] = 1;
    for(var i=2; i<pos+1 ; i++) {
        a[i] = a[i-1] + a[i-2];
    }
    return a[pos];
}
console.log(fibPos(6)); //8 from 0 1 1 2 3 5 8 series

//alternate fibPos 

function fibPos1(pos) {
    if(pos <3) return 1;
    return fibPos1(pos-1) + fibPos1(pos - 2);
}
console.log(fibPos1(0)); //8 from 0 1 1 2 3 5 8 series
