document.addEventListener("click", function (event) {
   if (event.target.id === "bookNow" || event.target.id === "bookNow2" || event.target.id === "bookNowTop" || event.target.id === "bookNowHero") {
        const confirmBooking = confirm(
            "Would you like to contact OgaSavo Comfort Apartments on WhatsApp to book your stay?"
        );
        if (confirmBooking) {
            window.open(
                "https://wa.me/254748893599?text=Hello%20OgaSavo%20Comfort%20Apartments,%20I%20would%20like%20to%20book%20a%20stay.",
                "_blank"
            );
        }
    }
});
const bookButton = document.getElementById("bookNow");

if (bookButton) {
    bookButton.textContent = "Reserve Now";
}
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
const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");
const nightsInput = document.getElementById("nights");
const bookingTotal = document.getElementById("bookingTotal");
const roomTypeInput = document.getElementById("roomType");

const bookingForm = document.getElementById("bookingForm");
const guestNameInput = document.getElementById("guestName");
const guestPhoneInput = document.getElementById("guestPhone");
const guestsInput = document.getElementById("guests");

function calculateBooking() {

    const checkInValue = checkInInput.value;
    const checkOutValue = checkOutInput.value;

    if (!checkInValue || !checkOutValue) {
        nightsInput.value = "";
        bookingTotal.textContent = "Total: KSh 0";
        return;
    }

    const checkIn = new Date(checkInValue + "T00:00:00");
    const checkOut = new Date(checkOutValue + "T00:00:00");

    const difference = checkOut.getTime() - checkIn.getTime();

    const nights = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    if (nights <= 0) {
        nightsInput.value = "";
        bookingTotal.textContent = "Total: KSh 0";
        return;
    }

    nightsInput.value = nights;

    const nightlyPrice = Number(roomTypeInput.value) || 0;

    document.getElementById("nightlyPrice").textContent =
        nightlyPrice > 0
            ? "KSh " + nightlyPrice.toLocaleString() + " per night"
            : "Select an accommodation";

    const total = nightlyPrice * nights;

    bookingTotal.textContent =
        "Total: KSh " + total.toLocaleString();
}


checkInInput.addEventListener("change", calculateBooking);
checkOutInput.addEventListener("change", calculateBooking);
roomTypeInput.addEventListener("change", calculateBooking);


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    calculateBooking();

    const name = guestNameInput.value.trim();
    const phone = guestPhoneInput.value.trim();
    const checkIn = checkInInput.value;
    const checkOut = checkOutInput.value;
    const nights = Number(nightsInput.value);
    const guests = Number(guestsInput.value);
    const nightlyPrice = Number(roomTypeInput.value);

    if (!roomTypeInput.value) {
        alert("Please select your accommodation.");
        return;
    }

    if (nights <= 0) {
        alert("Please select a valid check-in and check-out date.");
        return;
    }

    const total = nightlyPrice * nights;

    const roomName =
        nightlyPrice === 3000
            ? "Partition Room"
            : "Studio Apartment";

    const message =
        "Hello OgaSavo Comfort Apartments,%0A%0A" +
        "I would like to make a booking.%0A%0A" +
        "Accommodation: " + encodeURIComponent(roomName) + "%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Check-in: " + encodeURIComponent(checkIn) + "%0A" +
        "Check-out: " + encodeURIComponent(checkOut) + "%0A" +
        "Nights: " + nights + "%0A" +
        "Guests: " + guests + "%0A" +
        "Price per night: KSh " + nightlyPrice.toLocaleString() + "%0A" +
        "Total: KSh " + total.toLocaleString();

    const whatsappURL =
        "https://wa.me/254748893599?text=" + message;

    window.open(whatsappURL);
});
const galleryImages = [
    "studio1.jpg",
    "studio2.jpg",
    "studio3.jpg",
    "studio4.jpg",
    "studio5.jpg",
    "partition-livingroom.jpg",
    "partition-livingroom2.jpg",
    "partition-room.jpg",
    "kitchen1.jpg",
    "kitchen2.jpeg",
    "kitchen3.jpg",
    "bathroom1.jpg",
    "bathroom2.jpg",
    "bathroom3.jpg",
    "reception.jpg",
    "elevator.jpeg",
    "hallway.png",
    "parking.png",
    "frontview.jpeg",
    "rooftop1.jpeg",
    "rooftop2.jpg",
    "rooftop3.jpeg"
];

let currentImage = 0;

window.openLightbox = function(index) {
    currentImage = index;

    document.getElementById("lightboxImage").src =
        galleryImages[currentImage];

    document.getElementById("lightbox").classList.add("active");
};
window.openLightbox = function(index) {
    currentImage = index;

    document.getElementById("lightboxImage").src =
        galleryImages[currentImage];

    document.getElementById("lightbox").classList.add("active");
};

window.closeLightbox = function() {
    document.getElementById("lightbox").classList.remove("active");
};

window.changeImage = function(direction) {
    currentImage += direction;

    if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
    }

    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }

    document.getElementById("lightboxImage").src =
        galleryImages[currentImage];
};


/* =========================
   LIGHTBOX BACKGROUND CLICK
========================= */

const lightbox =
    document.getElementById("lightbox");

if (lightbox) {

    lightbox.addEventListener(
        "click",
        function(event) {

            if (event.target === this) {

                window.closeLightbox();

            }

        }
    );

}
