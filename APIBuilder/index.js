const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("I am from Pickupbiz....");
});

app.get("/emp", (req, res) => {
  res.json({ data: ["Umer", "Amer", "Sohel", "ather"] });
});

app.get("/dept", (req, res) => {
  res.send("I am from Department.....");
});

if (app.listen(5170)) {
  console.log("connected to localhost:5170");
}
