//Arrays and Loops
// https://www.geeksforgeeks.org/javascript/nesting-for-loops-in-javascript/

//Star Pattern
// for ( i =1; i<=4 ; i++){

// for( j =1 ; j<=5 ; j++)
//  {
//     document.write("*")
//  }
//  document.write("<br>")
// }


// //Star Pattern in ascending order
for ( i =1; i<=5 ; i++){

for( j =1 ; j<=i ; j++)
 {
    document.write("*")
 }
 document.write("<br>")
}



// //Star Pattern in ascending order
for ( i =5; i>=1 ; i--){

for( j =5 ; j>=i ; j--)
 {
    document.write("*")
 }
 document.write("<br>")
}


//Dynamic
var userRow = +prompt("ENter Number Of Rows..")
var userCol = +prompt("ENter Number Of Columns..")
var userChar = prompt("Enter your character")
for ( i =1 ; i<=userRow ; i++){
    for( j=1 ; j<=userCol ; j++ ){
        document.write(userChar)
    }
    document.write(  "<br>")
}
