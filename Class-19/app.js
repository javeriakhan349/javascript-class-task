var display = document.getElementById("current")
var num1 = ""; 
var num2 = ""; 
var operator = ""; 
var isSecondNumber = false;
function addToDisplayy(input){

    if( !isSecondNumber && ( input !== "+" &&  input !== "-" && input !== "*" && input !== "/" 
    && input !== "%" )){
        num1 +=input
        console.log("number 1" , num1);
    }
    
    else if( !isSecondNumber && ( input === "+" || input === "-" ||input === "*" || input === "/" 
    || input === "%" )){
        operator = input; 
        isSecondNumber = true;
        console.log("operator" , operator);
    }
    
    else if( isSecondNumber && ( input !== "+" &&  input !== "-" && input !== "*" && input !== "/" 
    && input !== "%" ) ){
        num2 += input;
        console.log("number 2" , num2);
    }
    display.innerHTML += input;

}
function calculate(){
    var result = ""
    num1 = Number(num1)
    num2 = Number(num2)

    if(operator === "+"){
        result = num1+num2
    }
     else if(operator === "-"){
        result = num1-num2
    }
     else if(operator === "*"){
        result = num1*num2
    }
     else if(operator === "/"){
        result = num1/num2
      
    }
   display.innerHTML = result
   num1 = result ;
   num2 = ""
   operator = ""
   isSecondNumber = false
}
function clearDisplay() {
    num1 = ""
    num2 = ""
    operator = ""
    isSecondNumber = false;
    display.innerHTML = "";
    previousDisplay.innerHTML = "";
}