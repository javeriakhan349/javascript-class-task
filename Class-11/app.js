function  titleCase(string){
    var splitStr = string.split(" ")
 for( i=0 ; i<splitStr ; i++ ){
var first = splitStr[i].charAt(0).toUpperCase()
var remain = splitStr[i].slice(1)
var string =first+remain
splitStr[i] = string
 }  
 var titlecaseStr = splitStr.join(" ")
 console.log(titlecaseStr)
}
var userString = prompt("Enter your string")
titleCase(userString)