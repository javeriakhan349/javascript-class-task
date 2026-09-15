//LOOPS:
for( i=0 ; i<10 ; i++ ) {
    console.log( i+1,"HELLO" );
}
//Multiplication Table:

var tableNo = +prompt("Enter table number...","5")
var n = +prompt("Enter table length...");
for(i=1; i<=n ;i++){
document.write(`${tableNo} x ${i} = ${tableNo*i} <br>`)
}