const express = require("express");
const cors = require("cors"); // Import CORS middleware
const DB = require("./config/DBconnection");
const router = require("./router/Routing");
const app = express();

// Initialize database connection
DB();

// CORS configuration
const corsOptions = {
  origin: "https://yog-jioni.onrender.com", // Replace with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow credentials (cookies, etc.)
};
app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// Route configuration
app.use(router);

// Start the server
app.listen(3000, () => {
  console.log("Server Started at Port 3000");
});
