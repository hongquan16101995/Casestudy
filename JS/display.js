let hondaClass = function(image, price, name){
    this.image = image;
    this.price = price;
    this.name = name;
}

function ShowElement (array){
    let content = "<table>";
    for (let i=0;i<array.length;i++){
        content += "<tr>";
        for (let j=0;j<array[i].length;j++){
            content += "<td><img  alt='Lỗi' src=" + array[i][j].image + "><h2>" + array[i][j].name +
                "</h2><p>Giá: " + array[i][j].price + " VND</p>" + "</td>"
        }
        content += "<tr>"
    }
    content += "</table>"
    document.getElementById("displayElement").innerHTML = content
}



//danh sách oto
let car1 = new hondaClass("../car_moto/car1.png", 418000000, "BRIO");
let car2 = new hondaClass("../car_moto/car2.png", 559000000, "CITY");
let car3 = new hondaClass("../car_moto/car3.png", 729000000, "CIVIC");
let car4 = new hondaClass("../car_moto/car4.png", 786000000, "HR-V");
let car5 = new hondaClass("../car_moto/car5.png", 983000000, "CR-V");
let car6 = new hondaClass("../car_moto/car6.png", 1319000000, "ACCORD");

let arrayCar = [[car1,car2,car3],[car4,car5,car6]];

function showCar() {
    let content = "<table>";
    for (let i=0;i<arrayCar.length;i++){
        content += "<tr>";
        for (let j=0;j<arrayCar[i].length;j++){
            content += "<td><img  alt='Lỗi' src=" + arrayCar[i][j].image + "><h2>" + arrayCar[i][j].name +
                "</h2><p>Giá: " + arrayCar[i][j].price + " VND</p>" +
                "<button><a href='../HTML/registration.html'>&emsp;Đăng ký lái thử&emsp;</a></button></td>"
        }
        content += "</tr>"
    }
    content += "</table>"
    document.getElementById("displayElement").innerHTML = content
}

