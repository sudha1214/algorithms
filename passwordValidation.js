function validator(str) {
    var length = -1;

    for(var i=0; i<str.length; i++) {
        for(var j=i+1; j<=str.length;j++) {
            var subStr = str.substring(i,j);
            if(validPassword(subStr))
            {
                if(length === -1 || subStr.length > length){
                    length = subStr.length;
                }
            }
        }
    }
    return length;
}
console.log(validator("a0Ba"));

function validPassword(str) {
    //should contain atleasr one capital letter.
    //No numbers.

    var upperCaseLetterFound = false;
    for(var i=0; i<str.length; i++) {
        if(!isNaN(parseInt(str[i]))) {
            return false;
        }
        if(str[i] === str[i].toUpperCase()) {
            upperCaseLetterFound = true;
        }
    }
    return upperCaseLetterFound;
}

console.log(validPassword("a0Ba"));