const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const expressSession = require('express-session')
const passport = require("passport");
require("./middleware/passport/googleStrategy");

// global._daeinModule = require("./middleware");

require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSession({
  secret: process.env.SECRET_KEY,
  cookie: { maxAge: 60 * 60 * 1000 },
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, HOST || "localhost", () => {
  console.log("================================");
  console.log("Server started!!");
  console.log(`HOST: ${HOST}, PORT: ${PORT}`);
  console.log("================================");
});

module.exports = app;
