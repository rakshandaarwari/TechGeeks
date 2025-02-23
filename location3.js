// Sample Data for Graph
const bookingData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Bookings",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  
  // Initialize Chart
  const ctx = document.getElementById("bookingChart").getContext("2d");
  const bookingChart = new Chart(ctx, {
    type: "bar",
    data: bookingData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  
  // Calendar Initialization
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = `<iframe src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=UTC" style="border-width:0" width="100%" height="400" frameborder="0" scrolling="no"></iframe>`;
  
  // Task Management
  document.getElementById("add-task-btn").addEventListener("click", () => {
    const newTaskInput = document.getElementById("new-task");
    const taskText = newTaskInput.value.trim();
  
    if (taskText) {
      const taskList = document.getElementById("task-list");
      const li = document.createElement("li");
  
      li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <span class="task-actions">
          <i class="fas fa-check-circle complete-task"></i>
          <i class="fas fa-trash delete-task"></i>
        </span>
      `;
  
      taskList.appendChild(li);
      newTaskInput.value = "";
    }
  });
  
  document.getElementById("task-list").addEventListener("click", (e) => {
    const target = e.target;
  
    if (target.classList.contains("complete-task")) {
      const taskText = target.closest("li").querySelector(".task-text");
      taskText.classList.toggle("completed");
    }
  
    if (target.classList.contains("delete-task")) {
      const taskItem = target.closest("li");
      taskItem.remove();
    }
  });
  
  // Venue Details Modal
  const modal = document.getElementById("venue-modal");
  const modalVenueName = document.getElementById("modal-venue-name");
  const modalVenueCapacity = document.getElementById("modal-venue-capacity");
  const modalVenueLocation = document.getElementById("modal-venue-location");
  const modalVenueDescription = document.getElementById("modal-venue-description");
  const closeBtn = document.querySelector(".close-btn");
  
  document.querySelectorAll(".view-details-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const venueName = button.getAttribute("data-venue");
      const venueDetails = getVenueDescription(venueName);
      modalVenueName.textContent = venueName;
      modalVenueCapacity.textContent = `Capacity: ${venueDetails.capacity}`;
      modalVenueLocation.textContent = `Location: ${venueDetails.location}`;
      modalVenueDescription.textContent = `Description: ${venueDetails.description}`;
      modal.style.display = "flex";
    });
  });
  
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  
  // Function to get venue description
  function getVenueDescription(venueName) {
    const descriptions = {
      "Canvas Laugh Club": {
        capacity: "200 seats",
        location: "Palladium Mall, High Street Phoenix, Lower Parel, Mumbai",
        description:
          "One of the most popular comedy clubs in Mumbai, hosting stand-up comedy shows featuring both established and upcoming comedians.",
      },
      "The Habitat": {
        capacity: "100 seats",
        location: "Khar West, Mumbai",
        description:
          "A cozy venue known for hosting comedy shows, open mics, and storytelling events.",
      },
      "The Comedy Factory": {
        capacity: "150 seats",
        location: "Kamala Mills, Lower Parel, Mumbai",
        description:
          "A dedicated comedy club that hosts regular stand-up shows, open mics, and special comedy nights.",
      },
      "Harkat Studios": {
        capacity: "80 seats",
        location: "Andheri West, Mumbai",
        description:
          "A creative space that hosts comedy shows, improv performances, and other artistic events.",
      },
      "The Cuckoo Club": {
        capacity: "60 seats",
        location: "Bandra West, Mumbai",
        description:
          "A quirky café and performance space that hosts comedy nights and open mics.",
      },
      "The Quarter": {
        capacity: "200 seats",
        location: "Royal Opera House, Charni Road, Mumbai",
        description:
          "A premium venue that hosts comedy shows, live performances, and cultural events.",
      },
    };
  
    return descriptions[venueName] || {
      capacity: "N/A",
      location: "N/A",
      description: "No description available.",
    };
  }