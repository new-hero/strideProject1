require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
var jwt = require("jsonwebtoken");
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hi Developer Server Is Running");
});
const uri =
  "mongodb+srv://strideprojectuser:strideprojectpass@cluster0.dtcwl7u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const verifyToken = (req, res, next) => {
  jwt.verify(token, 'wrong-secret', function(err, user) {
    if(err){
      return res.send(err)
    }
    
  });
};

async function run() {
  try {
    await client.connect();
    console.log("server connect");
    const strideProjectDb = client.db("strideProjectDb");
    const productCollection = strideProjectDb.collection("productCollection");
    const userCollection = strideProjectDb.collection("userCollection");

    app.post("/jwt", (res, res) => {
      const userInfo = req.body;
      const token = jwt.sign(userInfo, "secret", { expiresIn: "7d" });
      res.send({ token });
    });

    // products curd
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });
    app.patch("/products/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const product = req.body;
      const result = await productCollection.updateOne(filter, {
        $set: product,
      });
      res.send(result);
    });
    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await productCollection.deleteOne(filter);
      res.send(result);
    });
    app.get("/products", async (req, res) => {
      const query = {};
      const result = await productCollection.find(query).toArray();
      res.send(result);
    });
    app.post("/products", async (req, res) => {
      const product = req.body;
      const result = await productCollection.insertOne(product);
      res.send(result);
    });

    // users curd
    app.get("/users/get/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.findOne(query);
      res.send(result);
    });
    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const result = await userCollection.findOne(query);
      res.send(result);
    });
    app.patch("/users/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const newDoc = req.body;
      const result = await userCollection.updateOne(filter, {
        $set: newDoc,
      });
      res.send(result);
    });
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(filter);
      res.send(result);
    });

    //verify admin
    app.get("/users", async (req, res) => {
      const query = {};
      const result = await userCollection.find(query).toArray();
      res.send(result);
    });
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne({ ...user, role: "user" });
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
