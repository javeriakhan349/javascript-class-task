function longwordChecker (string){
var longestWord = " " ; 
var splitedStr = string.split(" ")
console.log(splitedStr);

for( var i=0 ; i<splitedStr.length ; i++){
   
 if( splitedStr[i].length > longestWord.length ){
    var longestWord = splitedStr[i]
    
 }
}
return longestWord ;
}

var string = prompt("Enter a sentence to check the longest word!")
var result = longwordChecker(string)
console.log(`The longest word is ${result}`);
longwordChecker(string)