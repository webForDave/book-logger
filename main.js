"use strict";

const express = require("express");
const app = express();
const layouts = require("express-ejs-layouts");
const homeController = require("./controllers/homeController");
const mongoose = require("mongoose");
const Subscriber = require("./models/books");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(layouts);

mongoose.connect("mongodb://localhost:27017/books_db");
const db = mongoose.connection;

db.once("open", () => {
    console.log("Connection to database successful!");
})

// Subscriber.create({
//     title: "Tomorrow died yesterday",
//     author: "Chimaka",
// })
// .then(subscriber => {
//     console.log(subscriber);
// })
// .catch(error => {
//     console.log(error,message);
// });

app.get("/", homeController.homeProccesor);

app.use(homeController.notFoundError);
app.use(homeController.internalServerError)

app.listen(app.get("port"), () => console.log(`🚀🚀 Server running on http://localhost:${app.get("port")}`));