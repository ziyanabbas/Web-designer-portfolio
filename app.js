const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
require("dotenv").config();

const static_path = path.join(__dirname, "./public");
app.use(express.static(static_path));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(port, () => {
  console.log(`This is running on ${port} `);
});
