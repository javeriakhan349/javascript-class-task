//Nested Loops
//pyramid pattern
for( i=1 ; i<=5 ; i++ )
{
    for( j=1 ; j<=5-i ; j++){
        document.write("&nbsp;&nbsp;")
    }
    for( k=1 ; k<=i ; k++)
    {
        document.write("*")
    }
    for( l=2 ; l<=i ; l++)
    {
        document.write("*")
    }
    document.write("<br>")
}


document.write("<br><br><br>")
// for( i=1 ; i<=5 ; i++ )
// {
//     for( j=5 ; j>=1 ; j--){
//         document.write("*")
//     }
//     document.write("<br>")
// }


//case sensitive
//LOWER CASE
var cities = [ "multan" , "karachi" , "islamabad" , "rawalpindi" ,"lahore" , "hyderabad"]
var userCity = prompt("Enter your city name")
var flag ="false"
for( i=0 ; i<cities.length ; i++){
    if ( userCity.toLowerCase() === cities[i]){
        flag = "true"
        console.log(`You are eligible`);
    }
}
if( flag === "false"){
    console.log(`You are not eligible`);
}


//UPPER CASE
var fruits = [ "APPLE" ,"BANANA" , "KIWI" ,"STRAWBERRY", "WATERMELON"]
var flag ="false"
var userFruit = prompt("Check whether the fruit is avaliable or not")
for ( j=0 ; j<fruits.length ; j++)
{
    if ( userFruit.toUpperCase() === fruits[j]){
        flag = "true"
        console.log("This fruit is avaliable  "+userFruit.toUpperCase());
    }
}
if(flag === "false"){
    console.log("This fruit is not avaliable  "+userFruit.toLowerCase());
}