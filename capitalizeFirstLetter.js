
//capitalize first letter
function capitalize(str) {
  return str && str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize("naga sudha")); //Naga sudha

//capitalize each word
function capitalizeEachWord(phrase) {
return phrase.split(" ").map((word) => word.toUpperCase()[0] + word.slice(1)).join(" ");
}

console.log(capitalizeEachWord("naga sudha")) //Naga Sudha

function convertUpperToLower(str) {
  for(var i=0; i<str.length; i++) {
     str[i] === str[i].toLowerCase() ? str[i].toUpperCase() : str[i].toLowerCase();
  }
  return str;
}

console.log(convertUpperToLower("nAgA")) //NaGa