require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello Developer Server Is Running");
});

// Define another route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

// Define a POST route
app.post("/api/data", (req, res) => {
  const data = req.body;
  res.json({ receivedData: data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
