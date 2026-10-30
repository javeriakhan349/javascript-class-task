function deleteRow(e)
{
    var row = e.parentNode.parentNode
    row.remove()
    console.log(row);

}
function editRow(e){
    var row = e.parentNode.parentNode
console.log(row.children[0].innerHTML);
console.log(row.children[1].innerHTML);

}
function addStudent(e){
event.preventDefault()
var nameValue = document.getElementById("studentName").value
var ageValue = document.getElementById("studentAge").value
var studentTableBody = document.getElementById("StuTablebody")

var row = document.createElement("tr")
row.innerHTML= `
<td>${nameValue}</td>
<td>${ageValue}</td>
<td>
<button onclick="editRow(this)">Edit</button>
<button onclick="deleteRow(this)">Delete</button></td>

`
StuTablebody.appendChild(row)
}