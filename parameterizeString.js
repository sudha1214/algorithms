function parameterize(str) {
  if(str.length > 0 ) {
    var strArray = str.trim().toLowerCase().split(' ');  //
    return strArray.join("-").replace(".", "");
  }
}

console.log(parameterize(" Robin Singh from USA."));



function string_parameterize(str) {
    str = str.trim().toLowerCase();
    return  str.replace(/\s/g, "-").replace(".", "");
}
console.log(string_parameterize("Robin Singh from USA.")); //"robin-singh-from-usa"