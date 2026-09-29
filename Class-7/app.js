var hasAlphabet = false  ;
var hasNumber = false ;
var startWithNumber = false ;
var password = prompt("Enter a password")
if( password.length<6 )
{
    alert("It must contain 6 chracters")

} 
for( i=0 ; i<password.length ; i++){
    var code = password.charCodeAt(i)
if ( code>= 48 && code <= 57) {
    hasNumber = true ; 
}
if ( (code>= 65 && code>= 90) || (code >= 97 && code<=122) ) {
    hasAlphabet = true ; 
}
}

if (!hasAlphabet) {
    alert("Your password must contain Alphabets!!!")
}
if (!hasNumber) {
    alert("Your password must contain Numbers!!!")
}

if ( password.charAt(0) >= 48 && password.charAt(0) <= 57 ) {
    startWithNumber = true ;
}
if ( startWithNumber = true )  {
    alert("Your password cannnot start with number")
}