const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
//const bodyParser = require("body-parser");

//Import the mongoose module
const mongoose = require("mongoose");
const mongoUsername = process.env.MONGO_USERNAME || "admin";
const mongoPassword = process.env.MONGO_PASSWORD || "admin";
const mongoServer = process.env.MONGO_SERVER || "mongo";
const mongoPort = process.env.MONGO_PORT || "27017";
const mongoDatabase = process.env.MONGO_DATABASE || "nymlog";
//Set up default mongoose connection
//const mongoDB = 'mongodb+srv://nurielmeni:Meni1971@cluster0-0isxr.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = `mongodb://${mongoUsername}:${mongoPassword}@${mongoServer}:${mongoPort}/${mongoDatabase}`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const loggerRouter = require("./routes/logger");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
//app.use(bodyParser.json());
app.use(cookieParser("NYMedia cookie secret"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/logger", loggerRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { error: err });
});

module.exports = app;
