const express = require("express");
const mongoose = require("mongoose");

main().then(() => console.log("성공?"));
main().catch((err) => console.log(err));
async function main() {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb://localhost:27017/yelp-camp");
}

const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen("3000", () => {
  console.log("3000 port 성공");
  console.log("http://localhost:3000/");
});
