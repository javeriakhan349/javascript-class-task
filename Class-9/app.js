//Birthyear  calculator
var age = +prompt("Enter your age")
console.log(`Your age is ${age}`);
var today = new Date()
var currentYear = today.getFullYear()
console.log(currentYear);
var birthYear = (currentYear- age) ; 
console.log(`Your Birth year is ${birthYear}`);