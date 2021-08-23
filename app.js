

const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
var items = [];
var item = "";
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true})); //**
app.use(express.static("public"));
app.get("/", function(req, res) {
var today = new Date();
var options = {
  weekday: "long",
  month: "long",
  day: "numeric"
}

var day = today.toLocaleDateString("en-US", options);
    res.render("lists", {kindOfDay: day, listOfItem: items});
});
app.post("/", function(req, res) {
  item = req.body.newItem //Them body Parser de xuat du lieu user nhap vao
  items.push(item);
  console.log(item);
  res.redirect("/");
  })


app.listen(3000, function(req, res) {
  console.log("Server is running on port 3000.")
});
