const express = require("express");
const mongoose = require("mongoose");
const Campground = require("./models/campground");

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

app.get("/campgrounds", async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
});

app.get("/campgrounds/:id", async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render("campgrounds/show", { campground });
});

app.listen("3000", () => {
  console.log("3000 port 성공");
  console.log("http://localhost:3000/");
});
