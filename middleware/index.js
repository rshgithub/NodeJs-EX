
const server = require("./Database/connection");

const middlewares = ( req, res, next) => {
    res.send("Page Not Found");
    next();
  };
  
  server.use(middleware);

  module.exports = middleware ;