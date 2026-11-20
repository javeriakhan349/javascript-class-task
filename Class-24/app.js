var student1  = {
    name  : {
        studentName : "Javeria khan" , 
        fatherName : "Shahid Khan "
    } ,
    email : "javeriakhanjk349@gmail.com" ,
    rollNo  : 1  ,
    courses : ["Web developnment" , "Graphic Designing"  ] , 
    img : "https://www.shutterstock.com/image-photo/portrait-headshot-confident-positive-woman-260nw-2734807251.jpg" ,
    address : {
        city : "Karachi" ,
        country : "Pakistan",
    }
}
var student2  = {
    name  : {
        studentName : "Abdul hadi  khan" , 
        fatherName : "Shahid Khan "
    } ,
    email : "abdulhadi49@gmail.com" ,
    rollNo  : 2  ,
    courses : ["Web developnment" , "Graphic Designing"  ] , 
    img ,
    address : {
        city : "Islamabad" ,
        country : "Pakistan",
    }
}
student2.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPeZqBa2I9E7Bxy8I6zjfH5r77BfyINw7PqVmhLbNoysBv2YGe0mMoomc&s=10"
var student3  = {
    name  : {
        studentName : "Hassan khan" , 
        fatherName : "Shahid Khan "
    } ,
    email : "hassankhan9@gmail.com" ,
    rollNo  : 1  ,
    courses : ["AI and Data Science" , "Graphic Designing"  ] , 
    img : ,
    address : {
        city : "Lahore" ,
        country : "Pakistan",
    }
}
var student4  = {
    name  : {
        studentName : "Shuraim khan" , 
        fatherName : "Shahid Khan "
    } ,
    email : "shuraimkhan3@gmail.com" ,
    rollNo  : 1  ,
    courses : ["Flutter Development " , "Graphic Designing"  ] , 
    img : ,
    address : {
        city : "Multan" ,
        country : "Pakistan",
    }
}
document.getElementById("profile1").innerHTML = `
<div class="card" style="width: 18rem;">
        <img src=${student1.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${student1.name.studentName}</h5>
          <p> 
          City : ${student1.address.city} <br>
          Country : ${student1.address.country}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Roll No = ${student1.rollNo}</li>
          <li class="list-group-item">Course = ${student1.courses[0]}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">${student1.email}</a>
          
        </div>
      </div> ` 

document.getElementById("profile2").innerHTML = `
<div class="card" style="width: 18rem;">
        <img src=${student2.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${student2.name.studentName}</h5>
          <p> 
          City : ${student2.address.city} <br>
          Country : ${student2.address.country}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Roll No = ${student2.rollNo}</li>
          <li class="list-group-item">Course = ${student2.courses[0]}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">${student2.email}</a>
          
        </div>
      </div> `      
document.getElementById("profile3").innerHTML = `
<div class="card" style="width: 18rem;">
        <img src=${student3.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${student3.name.studentName}</h5>
          <p> 
          City : ${student3.address.city} <br>
          Country : ${student3.address.country}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Roll No = ${student3.rollNo}</li>
          <li class="list-group-item">Course = ${student3.courses[0]}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">${student3.email}</a>
          
        </div>
      </div> `      
document.getElementById("profile4").innerHTML = `
<div class="card" style="width: 18rem;">
        <img src=${student4.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${student4.name.studentName}</h5>
          <p> 
          City : ${student4.address.city} <br>
          Country : ${student4.address.country}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Roll No = ${student4.rollNo}</li>
          <li class="list-group-item">Course = ${student4.courses[0]}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">${student4.email}</a>
          
        </div>
      </div> `      