function validateForm() {
    let user = document.getElementById("user").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let date = document.getElementById("date").value;
    let selectCar = document.getElementById("selectCar").value;
    if (user === "" || user === null) {
        alert("Bạn cần phải nhập thông tin đầy đủ và chính xác!");
        return false;
    }else if (phone === "" || phone === null) {
        alert("Bạn cần phải nhập thông tin đầy đủ và chính xác!");
        return false;
    }else if (address === "" || address === null) {
        alert("Bạn cần phải nhập thông tin đầy đủ và chính xác!");
        return false;
    }else if (date === "" || date === null) {
        alert("Bạn cần phải nhập thông tin đầy đủ và chính xác!");
        return false;
    }else if (selectCar === "" || selectCar === null) {
        alert("Bạn cần phải nhập thông tin đầy đủ và chính xác!");
        return false;
    }else
        alert("Bạn đã đăng ký thành công!")
}