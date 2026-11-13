
var h2 = document.createElement("h2")
var text = document.createTextNode("Pink Flower")
h2.appendChild(text)
document.body.appendChild(h2)

h2.setAttribute("class","unique")
var img = document.createElement("img")
img.setAttribute("src","https://img.magnific.com/free-photo/cosmos-flowers_1373-83.jpg?semt=ais_hybrid&w=740&q=80")
img.setAttribute("width","500px")
document.body.appendChild(img)

var p = document.getElementsByClassName("para")
p = p[0].childNodes[1]
p = p.setAttribute("class","unique")
console.log(p);

var div = document.createElement("div")
var p1 = document.createElement("p")
var p2 = document.createElement("p")
var but = document.createElement("button")
var textBut = document.createTextNode("Remove")
but.appendChild(textBut)
p1.appendChild(text)
p2.appendChild(text)
document.body.appendChild(p1)
document.body.appendChild(p2)
document.body.appendChild(div)
document.body.appendChild(but)
