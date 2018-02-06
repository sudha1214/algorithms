var arr = [0,4,5,7,10];

function findMissNumber(arr) {
	var newArr = [];
	for(var i = 0; i < arr.length; i++) {
   var diff = arr[i + 1] - arr[i];
    var count = 1;

    while ((diff - count) > 0) {

        newArr.push( arr[i] +count);
        count++;

    }
}
    return newArr;
}

console.log(findMissNumber(arr)) //1,2,3,6,8,9