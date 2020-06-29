let motor1 = new hondaClass("../car_moto/xemoto1.png", 678000000, "CBR1000RR");
let motor2 = new hondaClass("../car_moto/xemoto2.png", 678000000, "CBR1000RR");
let motor3 = new hondaClass("../car_moto/xemoto3.png", 678000000, "CBR1000RR");
let motor4 = new hondaClass("../car_moto/xemoto4.png", 678000000, "CBR1000RR");
let motor5 = new hondaClass("../car_moto/xemoto5.png", 678000000, "CBR1000RR");

let arrayMotor = [[motor1,motor2,motor3],[motor4,motor5]];

function showMotor() {
    ShowElement(arrayMotor)
}