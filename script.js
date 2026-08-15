document.addEventListener("DOMContentLoaded", function () {
    const bookNow = document.getElementById("bookNow");

    bookNow.addEventListener("click", function () {
        const confirmBooking = confirm(
            "Would you like to contact Bankz Comfort Apartments on WhatsApp to book your stay?"
        );

        if (confirmBooking) {
            window.open(
                "https://wa.me/254759651705?text=Hello%20Bankz%20Comfort%20Apartments,%20I%20would%20like%20to%20book%20a%20stay.",
                "_blank"
            );
        }
    });
});
