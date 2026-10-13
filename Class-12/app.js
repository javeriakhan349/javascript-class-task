// function longwordChecker (string){
// var longestWord = " " ; 
// var splitedStr = string.split(" ")
// console.log(splitedStr);

// for( var i=0 ; i<splitedStr.length ; i++){
   
//  if( splitedStr[i].length > longestWord.length ){
//     var longestWord = splitedStr[i]
    
//  }
// }
// return longestWord ;
// }

// var string = prompt("Enter a sentence to check the longest word!")
// console.log(`The string is ${string}`);
// var result = longwordChecker(string)
// console.log(`The longest word is ${result}`);
// longwordChecker(string)

// function upperCase (string){
//     splittedString = string.split(" ")
    
//     for( i=0 ; i<splittedString.length ; i++){
      
//         var comp = splittedString[i].charAt(0).toUpperCase()+splittedString[i].slice(1)
//         splittedString[i] = comp
//     }
//     var compSen = splittedString.join(" ")
//     console.log(compSen);
    
//         }
//         var sentence = prompt("Enter a sentence")  
//         upperCase(sentence)

function palindromeChecker (word){
    var reverse = " "; 
    var flag = false
    for( i=word.length-1 ; i>=0 ; i--){
reverse = reverse+word[i]

if( reverse === word){
    var flag = true; 

}
else{
   var flag = false
}
if( flag === true){
    console.log(` Word : ${word} is a palindrome`);
}else( flag === false)
{
    console.log(` Word : ${word} is not a palindrome`);
}

    }console.log(word,reverse);
}
var wordCheck = prompt("Enter a word")
palindromeChecker(wordCheck)
