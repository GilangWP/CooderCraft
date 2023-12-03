function register(){
    event.preventDefault();
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;
    
    if (password !== passwordRetype) {
        alert("Password don't match retype your Password.");
        return;
    } else {
        if (email.trim() === '') {
            alert("Please enter your email.");
            return;
        } else if (localStorage.getItem("email") === email) {
            alert(email + " is already registered.");
            return;
        } else {
            localStorage.setItem("email", email);
            localStorage.setItem("pass", password);
    
            alert(email + " Thanks for registration. \nTry to login Now");
            window.location.href = "login.html";
        }
    }
}
function login(){
    event.preventDefault();
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;

    if (email.trim() === '') {
        alert("Please enter your email.");
        return;
    } else if (password.trim() === '') {
        alert("Please enter your password.");
        return;
    } else if (localStorage.getItem("email") !== email) {
        alert("Email does not exist.");
        return;
    } else if (localStorage.getItem("pass") !== password) {
        alert("Password does not match.");
        return;
    } else {
        alert(email + " you are now logged in. \nWelcome to our website.");
        window.location.href = "utama.html";
    }

}
$(document).ready(function(){
    if(localStorage.getItem("email") && localStorage.getItem("pass")){
        $("#hide1").hide();
        $("#hide2").hide();
        $("#show").show();
    } else {
        $("#hide1").show();
        $("#hide2").show();
        $("#show").hide();
    }
});

function logout(){
    localStorage.removeItem("email");
    localStorage.removeItem("pass");
}