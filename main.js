// Aura Fashion Main JavaScript

document.addEventListener("DOMContentLoaded", () => {

    console.log("Aura Fashion Website Loaded");

    // Newsletter Form
    const newsletterForm = document.querySelector("form");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {

            e.preventDefault();

            alert("Thank you for subscribing to Aura Fashion!");

            newsletterForm.reset();
        });
    }

});

// Smooth Scroll Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Welcome Message
function showWelcome() {
    console.log("Welcome to Aura Fashion");
}

showWelcome();
