"use strict";

const express = require("express");
const app = express();
const homeController = require("./controllers/homeController");
const expressLayouts = require("express-ejs-layouts");

app.set("port", process.env.PORT | 3000);
app.set("view engine", "ejs");
app.use(expressLayouts)

app.get("/", homeController.homeProcessor);
app.get("/books", homeController.getAllBooks);
app.get("/books/new", homeController.createNewBook);
app.post("/books/new", homeController.newBookSuccess);
app.get("/books/:bookTitle", homeController.bookDetail);

app.listen(app.get("port"), () => {
    console.log(`Server running on port http://localhost:${app.get("port")}`);
})