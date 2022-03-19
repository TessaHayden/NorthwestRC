const express = require("express");
const aboutRouter = express.Router();

aboutRouter
  .route("/")
  .all((req, res) => {
    res.statusCode = 200;
    res.setHeader = ("Content-type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("About page");
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`${req.method} is not supported on /about`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(`${req.method} is not supported on /about`);
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end(`${req.method} is not supported on /about`);
  });

modules.exports = aboutRouter;
