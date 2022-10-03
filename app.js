require('module-alias/register')
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const imageRouter = require('@routes/imageRouter');

mongoose.connect(process.env.MONGO_URI_ONLINE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function callback() {
  console.log("Database Connected! API URL : " + process.env.PROXY);
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', '*')
  res.header([
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  ]);

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use('/image', imageRouter)

//middleware to check if url is found or not.
app.use((req, res, next) => {
  const error = new Error("URL Not found or Please Check POST or GET");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

mongoose.promise = global.Promise;

module.exports = app;
