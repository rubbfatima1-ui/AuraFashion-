// Aura Fashion Authentication

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            alert("Login Successful!");

            // Future Firebase Login
            // authenticate user here

            window.location.href = "account.html";
        });
    }

});

// Logout Function
function logout() {
    alert("Logged Out Successfully");
    window.location.href = "login.html";
}
