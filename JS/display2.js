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
                "</h2><p>Giá: " + array[i][j].price + " VND</p>" +
                "<button>&nbsp;Sửa&nbsp;</button>" + "&emsp;" + "<button>&nbsp;Xóa&nbsp;</button>" + "</td>"
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
    ShowElement(arrayCar)
}


//list xe ga
let scooter1 = new hondaClass("../car_moto/xega1.png", 71000000, "SH 150i");
let scooter2 = new hondaClass("../car_moto/xega2.png", 56500000, "PCX 150");
let scooter3 = new hondaClass("../car_moto/xega3.png", 41200000, "AirBlade 125");
let scooter4 = new hondaClass("../car_moto/xega4.png", 30000000, "Vision");
let scooter5 = new hondaClass("../car_moto/xega5.png", 38000000, "Lead");
let scooter6 = new hondaClass("../car_moto/xega6.png", 90000000, "PCX Hybrid");

let arrayScooter = [[scooter1,scooter2,scooter3],[scooter4,scooter5,scooter6]];

function showScooter() {
    ShowElement(arrayScooter)
}


//list xe motor
let motor1 = new hondaClass("../car_moto/xemoto1.png", 678000000, "CBR1000RR");
let motor2 = new hondaClass("../car_moto/xemoto2.png", 678000000, "CBR1000RR");
let motor3 = new hondaClass("../car_moto/xemoto3.png", 678000000, "CBR1000RR");
let motor4 = new hondaClass("../car_moto/xemoto4.png", 678000000, "CBR1000RR");
let motor5 = new hondaClass("../car_moto/xemoto5.png", 678000000, "CBR1000RR");

let arrayMotor = [[motor1,motor2,motor3],[motor4,motor5]];

function showMotor() {
    ShowElement(arrayMotor)
}


//list xe số
let motorbike1 = new hondaClass("../car_moto/xeso1.png", 30200000, "Future 125FI");
let motorbike2 = new hondaClass("../car_moto/xeso2.png", 18800000, "Blade");
let motorbike3 = new hondaClass("../car_moto/xeso3.png", 17800000, "Wave Alpha");
let motorbike4 = new hondaClass("../car_moto/xeso4.png", 21700000, "Wave RSX FI");

let arrayMotorbike = [[motorbike1,motorbike2,motorbike3],[motorbike4]];

function showMotorbike() {
    ShowElement(arrayMotorbike)
}


