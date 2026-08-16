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
const apartmentPrice = "KSh 2,500";
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

    const total = 2500 * nights;

    alert(
        "Welcome " + guestName +
        "!\n\nNights: " + nights +
        "\nPrice per night: KSh 2,500" +
        "\nTotal: KSh " + total
    );
}
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const guestName = document.getElementById("guestName").value;
    const guestPhone = document.getElementById("guestPhone").value;
    const checkIn = document.getElementById("checkIn").value;
   const checkout = document.getElementById("checkout").value;
    const nights = Number(document.getElementById("nights").value);
    const guests = Number(document.getElementById("guests").value);

    const pricePerNight = 2500;
    const total = pricePerNight * nights;

    const message =
        "Hello Bankz Comfort Apartments,%0A%0A" +
        "I would like to make a booking.%0A%0A" +
        "Name: " + encodeURIComponent(guestName) + "%0A" +
        "Phone: " + encodeURIComponent(guestPhone) + "%0A" +
        "Check-in: " + encodeURIComponent(checkIn) + "%0A" +
       "Check-out: " + encodeURIComponent(checkout) + "%0A" +
        "Nights: " + nights + "%0A" +
        "Guests: " + guests + "%0A" +
        "Price per night: KSh 2,500%0A" +
        "Total: KSh " + total;

    window.open(
        "https://wa.me/254759651705?text=" + message,
        "_blank"
    );
});
const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");
const nightsInput = document.getElementById("nights");
const bookingTotal = document.getElementById("bookingTotal");

function calculateBooking() {
    if (!checkInInput.value || !checkOutInput.value) {
        nightsInput.value = "";
        bookingTotal.textContent = "Total: KSh 0";
        return;
    }

    const checkIn = new Date(checkInInput.value);
    const checkOut = new Date(checkOutInput.value);

    const difference = checkOut - checkIn;
    const nights = Math.round(difference / (1000 * 60 * 60 * 24));

    if (nights > 0) {
        nightsInput.value = nights;

        const total = 2500 * nights;
        bookingTotal.textContent = "Total: KSh " + total;
    } else {
        nightsInput.value = "";
        bookingTotal.textContent = "Total: KSh 0";
    }
}

checkInInput.addEventListener("change", calculateBooking);
checkOutInput.addEventListener("change", calculateBooking);
const bookingForm = document.getElementById("bookingForm");
const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");
const nightsInput = document.getElementById("nights");
const guestsInput = document.getElementById("guests");
const guestNameInput = document.getElementById("guestName");
const guestPhoneInput = document.getElementById("guestPhone");
const bookingTotal = document.getElementById("bookingTotal");

function calculateBooking() {
    if (!checkInInput.value || !checkOutInput.value) {
        nightsInput.value = "";
        bookingTotal.textContent = "Total: KSh 0";
        return;
    }

    const checkIn = new Date(checkInInput.value);
    const checkOut = new Date(checkOutInput.value);

    const difference = checkOut - checkIn;
    const nights = Math.round(difference / (1000 * 60 * 60 * 24));

    if (nights > 0) {
        nightsInput.value = nights;

        const total = 2500 * nights;
        bookingTotal.textContent = "Total: KSh " + total;
    } else {
        nightsInput.value = "";
        bookingTotal.textContent = "Total: KSh 0";
    }
}

checkInInput.addEventListener("change", calculateBooking);
checkOutInput.addEventListener("change", calculateBooking);

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    calculateBooking();

    const name = guestNameInput.value;
    const phone = guestPhoneInput.value;
    const checkIn = checkInInput.value;
    const checkOut = checkOutInput.value;
    const nights = Number(nightsInput.value);
    const guests = Number(guestsInput.value);
    const total = 2500 * nights;

    if (nights <= 0) {
        alert("Please select a valid check-in and check-out date.");
        return;
    }

    const message =
        "Hello Bankz Comfort Apartments,%0A%0A" +
        "I would like to make a booking.%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Check-in: " + encodeURIComponent(checkIn) + "%0A" +
        "Check-out: " + encodeURIComponent(checkOut) + "%0A" +
        "Nights: " + nights + "%0A" +
        "Guests: " + guests + "%0A" +
        "Price per night: KSh 2,500%0A" +
        "Total: KSh " + total;

    const whatsappNumber = "254759651705";

    window.open(
        "https://wa.me/" + 254759651705 + "?text=" + message,
        "_blank"
    );
});
