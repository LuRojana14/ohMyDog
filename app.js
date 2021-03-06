require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const authRouter = require("./routes/auth");
const users = require("./routes/users");
const indexRouter = require("./routes/index");
// const razasSelect = require("./routes/razas");


const app = express();

mongoose
  .connect("mongodb://localhost/ohmydog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Middleware Setup

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "basic-auth-secret",
    cookie: { maxAge: 6000000 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, //1 day
    }),
    revsave: true,
    saveuninitialized: true,
  })
);

app.use((req, res, next) => {
  if (req.session.currentUser) {
    res.locals.currentUserInfo = req.session.currentUser;
    res.locals.isUserLoggedIn = true;
  } else {
    res.locals.isUserLoggedIn = false;
  }

  next();
});

app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

app.use("/auth", authRouter);
app.use("/users", users);
app.use("/", indexRouter);
// app.use("/razas", razasSelect);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
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

module.exports = app;
