document.addEventListener("click", function (event) {
   if (event.target.id === "bookNow" || event.target.id === "bookNow2" || event.target.id === "bookNowTop" || event.target.id === "bookNowHero") {
        const confirmBooking = confirm(
            "Would you like to contact Bankz Comfort Apartments on WhatsApp to book your stay?"
        );

        if (confirmBooking) {
            window.open(
                "https://wa.me/254759651705?text=Hello%20Bankz%20Comfort%20Apartments,%20I%20would%20like%20to%20book%20a%20stay.",
                "_blank"
            );
        }
    }
});
const bookButton = document.getElementById("bookNow");
bookButton.textContent = "Reserve Now";
