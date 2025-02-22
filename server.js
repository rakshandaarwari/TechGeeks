const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample API for the dashboard
app.get("/api/dashboard", (req, res) => {
    res.json({
        totalUsers: 120,
        totalEvents: 50,
        revenue: 30000
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
app.get("/api/dashboard", (req, res) => {
    res.json({
        totalUsers: 120,
        totalEvents: 50,
        revenue: 500000 // INR instead of USD
    });
});


