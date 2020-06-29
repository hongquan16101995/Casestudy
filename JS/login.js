function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username == "admin" && password == "abc"){
        alert("Đăng nhập thành công")
    }else
        alert("Đăng nhập thất bại")
}
