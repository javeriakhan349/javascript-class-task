var userCoin = prompt("Enter heads or tails...").toLowerCase()
var result ; 
var randomNum = Math.floor(Math.random() * 2)  ;
console.log(randomNum);
if ( randomNum === 0) {
    result = "heads" ; 
    console.log("Heads");
}
else{
    result = "tails" ; 
    console.log("Tails");
}
if ( userCoin === result) {
    console.log("You win !!!");
} else if ( userCoin === "heads" || userCoin === "tails") {
    console.log("You losttt");
}
else{
    console.log("Invalid output entered");
}