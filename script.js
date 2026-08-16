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
const apartmentPrice = "KSh 3,000";
document.getElementById("nightlyPrice").textContent = apartmentPrice + " per night";
document.getElementById("displayPrice").textContent = apartmentPrice;
function testBooking() {
    const guestName = prompt("What is your name?");
    
    if (!guestName) return;

    const nights = Number(prompt("How many nights will you stay?"));

    if (!nights || nights < 1) {
        alert("Please enter a valid number of nights.");
        return;
    }

    const total = 3000 * nights;

    alert(
        "Welcome " + guestName +
        "!\n\nNights: " + nights +
        "\nPrice per night: KSh 3,000" +
        "\nTotal: KSh " + total
    );
}
document.getElementById("testButton").addEventListener("click", testBooking);
