function isPalindrome(str) {
    str = str.replace(/s/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("PAP"));

console.log(isPalindrome("PAT"));

function isPalindrome1(string) {
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    var lettersArr = [];
    charactersArr.forEach(char => {
      if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });
    
    return lettersArr.join('') === lettersArr.reverse().join('');
  }
   
  isPalindrome1("Madam, I'm Adam");


function std(id,name,subject){ 

this.id=id; 

this.name=name; 

this.subject=subject; 

} 

s= new std(1114,"Ram Bajaj","Physics"); 

console.log(s);//std { id: 1114, name: 'Ram Bajaj', subject: 'Physics' }

console.log( std(1114,"Ram Bajaj","Physics")); //undefined