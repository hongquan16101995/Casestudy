let motorbike1 = new hondaClass("../car_moto/xeso1.png", 30200000, "Future 125FI");
let motorbike2 = new hondaClass("../car_moto/xeso2.png", 18800000, "Blade");
let motorbike3 = new hondaClass("../car_moto/xeso3.png", 17800000, "Wave Alpha");
let motorbike4 = new hondaClass("../car_moto/xeso4.png", 21700000, "Wave RSX FI");

let arrayMotorbike = [[motorbike1,motorbike2,motorbike3],[motorbike4]];

function showMotorbike() {
    ShowElement(arrayMotorbike)
}
