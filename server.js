const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require('passport');
const session = require('express-session');

const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

//load passport strategies
require("./config/passport/passport.js")(passport, db.User);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/myguitarhub",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
