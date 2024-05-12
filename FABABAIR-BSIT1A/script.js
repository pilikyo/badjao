function Login() {
    var user = document.getElementById("username")
    var pass = document.getElementById("password")

    if(user.value == "admin" && pass.value == "admin"){
        alert("logIn successfully");
        window.open("content.html");
        
    }
    else{
        alert("LogIn Failed")
        return false;
    }

}