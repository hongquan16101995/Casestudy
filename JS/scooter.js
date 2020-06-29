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