require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const prods = require("./prods");

const app = express();

// setting a db connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to the database"));

// setting a middleware
app.use(express.json());

// setting up port
const PORT = process.env.PORT || 4000;

// setting up an endpoint
app.get("/", (req, res) => {
  res.json(prods);
});

app.listen(PORT, () => console.log("listening on port", PORT));
