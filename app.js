const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("성공");
  res.send("기본 라우트 성공");
});

app.listen("3000", () => {
  console.log("3000 port 성공");
  console.log("http://localhost:3000/");
});
