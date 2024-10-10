import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static("public"));

// Set PUG as the template engine
app.set("view engine", "pug");

// Routes
app.get("/", (req, res) => {
  res.render("template1");
});

app.get("/template2", (req, res) => {
  res.render("template2");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Success");
});

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
