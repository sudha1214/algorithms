var k = 3;
var matches = [
    ["Apple","Banana","Cream","Date","Elderberry","Fig","LeftWins"],
    ["Apple","Banana","Cream","Apricot","Rice","Orange","RightWins"],
    ["Hazelnut","Jam","Banana","Banana","Apple","Cream","LeftWins"],
    ["Strawberry","Orange","Rice","Cream","Kiwi","Lemon","RightWins"],
    ["Orange","Pear","Strawberry","Watermelon","Kiwi","Elderberry","LeftWins"],
    ["Kiwi","Mint","Watermelon","Vanilla","Coconut","Hazelnut","RightWins"],
    ["Kelly","Vanilla","Watermelon","Oat","Rice","Lemon","LeftWins"],
    ["Apple","Rice","Coconut","Lemon","Coconut","Nutmeg","RightWins"],
    ["Orange","Peach","Hazelnut","Coconut","Vanilla","Hazelnut","RightWins"],
    ["Kiwi","Elderberry","Watermelon","Nutmeg","Kiwi","Lemon","LeftWins"],
    ["Lemon","Yogurt","Nutmeg","Watermelon","Mint","Kiwi","RightWins"],
    ["Kelly","Vanilla","Watermelon","Yogurt","Lemon","Apricot","LeftWins"],
    ["Vanilla","Elderberry","Kiwi","Nutmeg","Lemon","Coconut","RightWins"],
    ["Lemon","Rice","Oat","Kiwi","Yogurt","Pear","LeftWins"],
    ["Milk","Apple","Grape","Yogurt","Milk","Nutmeg","RightWins"],
    ["Rice","Apple","Coconut","Kelly","Elderberry","Oat","LeftWins"],

];
var receipe1 = ["Apricot","Rice","Orange"];
var receipe2 = ["Apple","Banana","Cream"];
var receipe3 = ["Lemon","Rice","Oat"];
var receipeMatchObjs = [];

function receipeMatch(ingredients) {
var matrix = {};
var receipeMatchObj = {};
for (var i = 0; i < matches.length; i++) {
  // match == ["Apple","Banana","Cream","Date","Elderberry","Fig","LeftWins"]
  var match = matches[i];
  var leftRecipe = match.slice(0,3); // ["Apple","Banana","Cream"]
  var rightRecipe = match.slice(3,match.length-1); // ["Date","Elderberry","Fig"]
  var wins = match[match.length-1];
 if(JSON.stringify(ingredients.sort())===JSON.stringify(rightRecipe.sort())) {
    if(ingredients in receipeMatchObj) {
      receipeMatchObj[ingredients]['win'] = (wins === 'RightWins') ? receipeMatchObj[ingredients]['win'] +1 : receipeMatchObj[ingredients]['win'];
      receipeMatchObj[ingredients]['losses'] = (wins === 'RightWins') ? receipeMatchObj[ingredients]['losses'] : receipeMatchObj[ingredients]['losses'] +1;
    } else {
      matrix =  (wins === 'RightWins') ? {'win':1,'losses':0} :  {'win':0,'losses':1};
      receipeMatchObj[ingredients] = matrix;
    }    
  }

   else if(JSON.stringify(ingredients.sort())===JSON.stringify(leftRecipe.sort())) {
    if(ingredients in receipeMatchObj) {
      receipeMatchObj[ingredients]['win'] = (wins === 'LeftWins') ? receipeMatchObj[ingredients]['win'] +1 : receipeMatchObj[ingredients]['win'];
      receipeMatchObj[ingredients]['losses'] = (wins === 'LeftWins') ? receipeMatchObj[ingredients]['losses'] : receipeMatchObj[ingredients]['losses'] +1;
    } else {
      matrix =  (wins === 'LeftWins') ? {'win':1,'losses':0} :  {'win':0,'losses':1};     
      receipeMatchObj[ingredients] = matrix;
    }

  }

}
var winPercentage = receipeMatchObj[ingredients]['win'] / (receipeMatchObj[ingredients]['win'] + receipeMatchObj[ingredients]['losses']);
receipeMatchObj[ingredients]['winPercentage'] = winPercentage * 100;
receipeMatchObjs.push(receipeMatchObj);
return receipeMatchObj;
}
receipeMatch(receipe1);
receipeMatch(receipe2);
receipeMatch(receipe3);

console.log(receipeMatchObjs);
