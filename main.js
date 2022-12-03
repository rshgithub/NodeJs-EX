const express = require("express");
const router = require("./controllers");
const sequelize = require("./database/connection");
const csp = require('express-csp-header');

// app.use(router , csp({
//     policies: {
//         'default-src': [csp.NONE],
//         'img-src': [csp.SELF],
//     }
// }));

// app.use(function(req, res, next) {
//     res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
//     return next();
// });


const app = express();

// app.use(router); 

app.listen(3500, () => {
    console.log("server is running");
});

module.export = { express , router , sequelize }