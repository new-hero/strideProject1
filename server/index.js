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
  res.send("Hi Developer Server Is Running");
});



// get one
app.get("/data/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await dataCollection.findOne(query);
  res.send(result);
});

// Define Patch route
app.patch("/data/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const data = req.body;
  const result = await dataCollection.updateOne(filter, {
    $set: data,
  });
  res.send(result);
});

// Define Patch route
app.delete("/data/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const result = await dataCollection.deleteOne(filter);
  res.send(result);
});

//get all
app.get("/data", async (req, res) => {
  const query = {};
  const result = await dataCollection.find(query).toArray();
  res.send(result);
});

// post data
app.post("/data", async (req, res) => {
  const data = req.body;
  const result = await dataCollection.insetOne(data);
  res.send(result);
});




// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
