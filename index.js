const express = require("express");
const cors = require("cors"); // Import the CORS middleware
const DB = require("./config/DBconnection");
const router = require("./router/Routing");
const app = express();

// Initialize database connection
DB();

// Configure CORS
const corsOptions = {
  origin: "https://yog-jioni.onrender.com", // Replace with your frontend's URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow cookies and other credentials
};
app.use(cors(corsOptions)); // Enable CORS with the above options

// Middleware to parse JSON
app.use(express.json());

// Route configuration
app.use(router);

// Start the server
app.listen(3000, () => {
  console.log("Server Started at Port 3000");
});
