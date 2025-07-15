// SETUP
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

// DATA
const title = "LinDist.com";

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
        console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// MIDDLEWARE
app.use(express.urlencoded({ extended: false, }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));

// ROUTES
app.get("/", (req, res) => {
        res.render("index.ejs", {
                title,
        });
});

app.get("/new", (req, res) => {
        res.render("new.ejs", {
                title,
        });
});

// STARTING THE SERVER
app.listen(port, () => {
        console.log(`Server is listening on port ${port}.`);
});