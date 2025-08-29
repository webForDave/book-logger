"use strict";

const Book = require("../models/books");

exports.getAllBooks = (req, res) => {
    Book.find({})
    .then(books => {
        res.render("books", {books: books});
    })
    .catch(error => {
        console.log(error);
    })
}