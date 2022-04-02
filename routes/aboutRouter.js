const express = require("express");
const About = require('../models/about');

const aboutRouter = express.Router();

aboutRouter
  .route("/")
  .get((req, res, next) => {
    About.find()
      .then(about => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(about);
      })
      .catch(err => next(err));
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

module.exports = aboutRouter;
