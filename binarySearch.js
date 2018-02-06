function binarySearch(arr, elm, min, max) {
    if(arr.length === 0 ) return -1;
    if(arr.length === 1 && arr[0] !== elm) return -1;
    if(arr.length === 1 && arr[0] === elm) return 0;
    var mid = parseInt((min+max)/2);
    while(min <= max) {
        if(arr[mid] === elm) return mid;
        else if(mid < elm) return binarySearch(arr, elm, mid+1, max);
        else return binarySearch(arr, elm, min, mid-1);
    }
    return -1;
}

var arr=[1,2,3,4,5];
console.log(binarySearch(arr, 6, 0,4));

