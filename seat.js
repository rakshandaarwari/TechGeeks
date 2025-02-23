// DOM Elements
const seatMap = document.querySelector(".seat-map");
const selectedSeatsElement = document.getElementById("selected-seats");
const totalPriceElement = document.getElementById("total-price");
const bookNowButton = document.getElementById("book-now");

// Constants
const SEAT_PRICE = 200; // Price per seat
let selectedSeats = []; // Array to store selected seats

// Sample Data
const seats = [
  { id: 1, status: "available" },
  { id: 2, status: "available" },
  { id: 3, status: "occupied" },
  { id: 4, status: "available" },
  { id: 5, status: "available" },
  { id: 6, status: "occupied" },
  { id: 7, status: "available" },
  { id: 8, status: "available" },
  { id: 9, status: "available" },
  { id: 10, status: "occupied" },
  { id: 11, status: "available" },
  { id: 12, status: "available" },
  { id: 13, status: "available" },
  { id: 14, status: "occupied" },
  { id: 15, status: "available" },
  { id: 16, status: "available" },
  { id: 17, status: "available" },
  { id: 18, status: "occupied" },
  { id: 19, status: "available" },
  { id: 20, status: "available" },
  { id: 21, status: "available" },
  { id: 22, status: "occupied" },
  { id: 23, status: "available" },
  { id: 24, status: "available" },
  { id: 25, status: "available" },
  { id: 26, status: "occupied" },
  { id: 27, status: "available" },
  { id: 28, status: "available" },
  { id: 29, status: "available" },
  { id: 30, status: "occupied" },
  { id: 31, status: "available" },
  { id: 32, status: "available" },
  { id: 33, status: "occupied" },
  { id: 34, status: "available" },
  { id: 35, status: "available" },
  { id: 36, status: "occupied" },
  { id: 37, status: "available" },
  { id: 38, status: "available" },
  { id: 39, status: "available" },
  { id: 40, status: "available" },
  { id: 41, status: "available" },
  { id: 42, status: "available" },
  { id: 43, status: "occupied" },
  { id: 44, status: "available" },
  { id: 45, status: "available" },
  { id: 46, status: "available" },
  { id: 47, status: "available" },
  { id: 48, status: "available" },
  { id: 49, status: "available" },
  { id: 50, status: "occupied" },
  { id: 51, status: "occupied" },
  { id: 52, status: "available" },
  { id: 53, status: "occupied" },
  { id: 54, status: "available" },
  { id: 55, status: "available" },
  { id: 56, status: "occupied" },

 
];

// Initialize Seat Map
function initializeSeats() {
  seatMap.innerHTML = seats
    .map(
      (seat) => `
      <div class="seat ${seat.status}" data-id="${seat.id}">
        ${seat.id}
      </div>
    `
    )
    .join("");
}

// Update Booking Details
function updateBookingDetails() {
  selectedSeatsElement.textContent = selectedSeats.length;
  totalPriceElement.textContent = selectedSeats.length * SEAT_PRICE;
}

// Event Listeners for Seat Selection
seatMap.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    const seatId = e.target.dataset.id;

    // Toggle seat selection
    if (selectedSeats.includes(seatId)) {
      selectedSeats = selectedSeats.filter((id) => id !== seatId);
      e.target.classList.remove("selected");
    } else {
      selectedSeats.push(seatId);
      e.target.classList.add("selected");
    }

    // Update booking details
    updateBookingDetails();
  }
});

// Book Now Button
bookNowButton.addEventListener("click", () => {
  if (selectedSeats.length === 0) {
    alert("Please select at least one seat.");
    return;
  }
  alert(`You have booked ${selectedSeats.length} seat(s) for ₹${selectedSeats.length * SEAT_PRICE}.`);
});

// Initialize
initializeSeats();