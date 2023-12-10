const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

main().then(() => console.log("성공?"));
main().catch((err) => console.log(err));
async function main() {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb://localhost:27017/yelp-camp");
}

const sample = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "65719752d16fbbaf7e7be1a9",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus qui velit in ipsum sunt eveniet facilis cupiditate vitae eligendi, nostrum assumenda atque ut dolores, quisquam odio deleniti libero sapiente dolore?",
      price: price,
      images: [
        {
          url: "https://res.cloudinary.com/dgiajcek6/image/upload/v1702185771/YelpCamp/oita5edj36ocrrr4sqvk.jpg",
          filename: "YelpCamp/oita5edj36ocrrr4sqvk",
        },
        {
          url: "https://res.cloudinary.com/dgiajcek6/image/upload/v1702185771/YelpCamp/mdbp7sxzcpqs7qujhhch.png",
          filename: "YelpCamp/mdbp7sxzcpqs7qujhhch",
        },
        {
          url: "https://res.cloudinary.com/dgiajcek6/image/upload/v1702185771/YelpCamp/qb6szaom3mwjktcvlo0n.png",
          filename: "YelpCamp/qb6szaom3mwjktcvlo0n",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
