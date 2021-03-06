const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const index = require("./routes/index");
const rest = require("./routes/restRoute");

mongoose.connect(
  "mongodb+srv://ElineSPP:<password>@cluster0.fi7vb.mongodb.net/restaurantes?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Successful connection");
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", index);
app.use("/rest", rest);

module.exports = app;


