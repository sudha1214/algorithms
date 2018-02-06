//Write a JavaScript function to split a string and convert it into an array of words.


function stringToArray(str) {
     return str.trim().split(" ");
};
console.log(stringToArray(" Robin Singh ")); // [ 'Robin', 'Singh' ]

//without trim function, it returns [ '', 'Robin', 'Singh', '' ]