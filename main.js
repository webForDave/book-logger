"use strict";

const express = require("express");
const app = express();
const layouts = require("express-ejs-layouts");
const homeController = require("./controllers/homeController");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(layouts);

app.get("/", homeController.homeProccesor);

app.listen(app.get("port"), () => console.log(`🚀🚀 Server running on http://localhost:${app.get("port")}`));