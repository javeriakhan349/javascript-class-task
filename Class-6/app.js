// var birthMonth = prompt("Enter your birth month:")
// var monthLength = birthMonth.length
// if ( monthLength >3 ){
//     birthMonth = birthMonth.slice(0,3)

// }
// console.log( birthMonth , monthLength );


// var flag = "false";
var string = prompt("Where do you study?")
// string = string.toLowerCase() ;
// for ( i=0 ; i<string.length ; i++)
// {
    
//     if  (string.slice( i,i+4) === "smit" || string.slice( i , i+6 ) === "aptech" ){
//         flag = "true";
//     }
// }
// if( flag === "true"){
//     console.log("You can participate in Hackathon!!!");
   
// }
// else{
//     console.log("You cannot participate in Hackathon");
// }


console.log(string.indexOf("smit"));
if(string.indexOf === "-1")
{
    console.log("You cannot participate in Hackathon!!!");
}
else{
    console.log("You can participate in Hackathon");
}




