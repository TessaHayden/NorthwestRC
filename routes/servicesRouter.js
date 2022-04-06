const express = require('express');
const Home = require('../models/home');
const Services = require('../models/services');

const servicesRouter = express.Router();

servicesRouter.route('/')
    .get((req, res, next) => {
        Services.find()
            .then(services => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(services);
            })
            .catch(err => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /services`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /services`);
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /services`);
    });

module.exports = servicesRouter;