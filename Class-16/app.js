function deleteRow(e)
{
    var row = e.parentNode.parentNode
    row.remove()
    console.log(row);

}
function display(e)
{
    alert("Thanks for purchasing")
}

var number = document.getElementById("number")
var count = Number(number.innerText)
console.log(count);

function increment (e)
{
count=count+1
number.innerText =count
console.log(count);
}
function  decrement (e)
{
count=count-1
number.innerText =count                                                                                                                                                
console.log(count);
}