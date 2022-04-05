const express = require('express');
const Home = require('../models/home');

const homeRouter = express.Router();

homeRouter.route('/')
    .get((req, res, next) => {
        Home.find()
            .then(home => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(home);
            })
            .catch(err => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /home`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /home`);
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /home`);
    });


module.exports = homeRouter;