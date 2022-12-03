const express = require("express");
const router = require("./controllers");

const app = express();

app.use(router); 

app.listen(3500, () => {
    console.log("server is running");
});
