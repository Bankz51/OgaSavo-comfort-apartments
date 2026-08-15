document.addEventListener("DOMContentLoaded", function () {
    if (!sessionStorage.getItem("welcomeShown")) {
        alert("Welcome to Bankz Comfort Apartment! 🏠");
        sessionStorage.setItem("welcomeShown", "true");
    }
});
