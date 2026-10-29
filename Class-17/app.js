// function getCity(){
//     zip = document.getElementById("zip").value
//    var cityName ;
//     switch(zip){
//         case "44000" :
//             cityName = "Islamabad";
//             break;
//         case "74200" :
//             cityName = "Karachi ";
//             break;
//         case "54000" :
//             cityName = "Lahore ";
//             break;
//         case "38000" :
//             cityName = "Faisalabad";
//             break;
//         case "46000" :
//             cityName = "Rawalpindi";
//             break;
//             default :
//             cityName = "Invalid zip code";
//     }
//     document.getElementById("city").value = cityName
// console.log(cityName,zip);
// }

// function getCode(){
//     city = document.getElementById("city").value
//     var code; 
// switch(city){
//     case "karachi" :
//         code = "44000"
//         break ; 
//     case "rawalpindi" :
//         code = "46000"
//         break ; 
//     case "islamabad" :
//         code = "74200"
//         break ; 
//         default :
//         code = "Invalid city name" ;
// }
// document.getElementById("zip").value = code
// console.log(city, code);
// }

function paragraph(){
    var link; 
    var fullpara = "deserunt! Corporis obcaecati odio magnam placeat suscipit laborum soluta commodi, illum, libero adipisci necessitatibus debitis beatae hic consectetur veritatis cum mollitia! Deserunt dolor beatae velit nulla, sunt et nemo quae tempore porro impedit tempora consequatur. Repellendus in tempore eos similique error molestias temporibus, asperiores dolor ullam at placeat dolore eum ad, modi ea? Fugiat voluptatum iusto cum vero perspiciatis ex optio deleniti tempora laboriosam, voluptatibus nesciunt ut delectus ipsum impedit reiciendis explicabo quam doloribus eveniet. Quia accusamus consequatur magni sint voluptatum ipsum aut nostrum. Aut itaque cum laboriosam minima iste sed inventore unde, voluptates quia sint earum harum est optio suscipit molestiae natus culpa dicta. Necessitatibus cupiditate commodi, harum magnam odio incidunt nostrum eius labore tenetur dignissimos eaque maxime molestias recusandae, odit voluptatum quod unde perspiciatis expedita voluptatibus ut officia exercitationem. Odio, quae! Exercitationem, soluta. Possimus molestiae saepe consequuntur sit, numquam tempore reiciendis aliquam fuga vero porro, ipsa ratione in et eligendi earum ea excepturi beatae architecto assumenda nam quidem nihil. Eaque consectetur sapiente nostrum tempore quam aliquam ex explicabo dolore deserunt adipisci magni voluptate veniam vero distinctio, animi libero eum mollitia ratione neque nobis obcaecati reiciendis quos! Iste enim alias earum, hic suscipit inventore sint, corporis accusamus libero eum facere animi tenetur cum?"

    var lesspara =  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illum rem temporibus harum necessitatibus ipsum molestiae animi autem. Quas aliquam facere nemo dolore magni magnam quaerat molestiae totam velit reprehenderit! Repellendus expedita nesciunt voluptatum, impedit esse iusto dolores, voluptates quisquam illo quas at ad officia similique quis labore quam assumenda. Maiores magni sed atque quidem inventore eos maxime iure numquam asperiores eius, similique delectus nam dolores, aliquid repellendus harum neque corrupti ad voluptates deserunt in? Distinctio repudiandae placeat nisi ipsam sint quod? Hic quae magnam sint doloribus at in modi aspernatur, quod ab, est obcaecati, id" 
    document.getElementById("para").innerHTML = link
 
    if(link === "See more" ){
document.getElementById("para").value = fullpara
        document.getElementById("more").value = "See more"
    }else{
        document.getElementById("para").value = lesspara
        document.getElementById("more").value = "See less"
    }
}