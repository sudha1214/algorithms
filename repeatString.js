	function rep( str, n ) {

		return n === 0 || n=== 1 ? str : str + rep( str, n-1);
	}
	console.log( rep( 'Ha!', 0 )); // Ha!
	console.log( rep( 'Ha!', 2 )); // Ha!Ha!


function insert(original,string,place){
var array = original.split('');
array.splice(place,0,string);
console.log(array);
return array.join('');
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));

function removeNonWord(str){
return str.replace(/\W/g,"");

}

console.log(removeNonWord('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'))