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

exports.createNewBook = (req, res) => {
    res.render("newBook");
}

exports.newBookConfirmed = (req, res, next) => {
    Book.create({
        title: req.body.title,
        author: req.body.author
    }).then(book => {
        console.log("New book created");
        res.render("bookCreated");
    }).catch(error => {
        console.log("An error occurred");
        next(error);
    });
}