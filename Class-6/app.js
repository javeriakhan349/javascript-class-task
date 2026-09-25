var birthMonth = prompt("Enter your birth month:")
var monthLength = birthMonth.length
if ( monthLength >3 ){
    birthMonth = birthMonth.slice(0,3)

}
console.log( birthMonth , monthLength );