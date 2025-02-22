// admin.js

document.addEventListener("DOMContentLoaded", function () {
    function showSection(sectionId) {
        document.querySelectorAll(".dashboard-section").forEach(section => {
            section.classList.remove("active");
        });
        document.getElementById(sectionId).classList.add("active");
    }

    // Fetch dashboard data
    fetch("http://localhost:5000/api/dashboard")
        .then(response => response.json())
        .then(data => {
            document.getElementById("user-count").innerText = data.totalUsers;
            document.getElementById("event-count").innerText = data.totalEvents;
            document.getElementById("revenue").innerText = `₹${data.revenue}`;

        })
        .catch(error => console.error("Error fetching dashboard data:", error));

    // Analytics Chart
    const ctx = document.getElementById("revenueChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Users", "Events", "Bookings", "Revenue"],
            datasets: [{
                label: "Admin Analytics",
                data: [120, 50, 200, 30000],
                backgroundColor: ["#ff6600", "#333", "#ffcc00", "#009900"]
            }]
        }
    });

    window.showSection = showSection;
});
