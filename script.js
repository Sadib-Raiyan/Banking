document.getElementById("login-submit").addEventListener("click", function () {
    const userEmail = document.getElementById("user-email").value;
    const userPass = document.getElementById("user-password").value;
    if (userEmail == "abc@def.com" && userPass == "123") {
        window.location.href = "banking.html";
    } else {
        alert("Wrong email password combination ");
    }
});
