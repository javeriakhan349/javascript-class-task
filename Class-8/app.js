var userCoin = prompt("Enter heads or tails...")
var result ; 
var randomNum = Math.ceil(Math.random() * 2)-1  ;
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
} else {
    console.log("You losttt");
}