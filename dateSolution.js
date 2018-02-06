//1. Given time in seconds T=7500, convert into 2h:5m:0s format?
 
function solution(T) {
    // write your code in JavaScript (Node.js 6.4.0)
 
    var seconds=Math.round(T);
    var hours=Math.floor(seconds/3600);
    var minutes=Math.floor((seconds-(hours * 3600))/60);
    var sec=Math.floor(seconds-(hours * 3600)-(minutes*60));
 
    return hours+"h"+minutes+"m"+sec+"s";
}

//console.log(solution(2343));

var foo = [{"z":5, "y":10, "x":15}, {"z":30, "y":40, "x":50}];
foo.map(function(bar) {
    // return an array
    // containing the values of each key in the object
    return Object.keys(bar).map(function(key){ 
        console.log(bar[key])
        return bar[key]; 
    }); 
});
