const express = require("express");
const router = require("./controllers");
const sequelize = require("./database/connection");
const csp = require('express-csp-header');

const app = express();

// app.use(router); 

app.listen(3500, () => {
    console.log("server is running");
});

module.export = { express , router , sequelize }