"use strict";

const httpStatus = require("http-status-codes");

exports.homeProccesor = (req, res) => {
    res.render("index");
}

exports.notFoundError = (req, res, next) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status = errorCode;
    res.render("404");
}

exports.internalServerError = (req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    res.status = errorCode;
    res.send("We all have bad days, yeah? Sadly it's our turn today, check back later");
}