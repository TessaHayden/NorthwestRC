const express = require('express');
const Contact = require('../models/contact');
const authenticate = require('../authenticate');

const contactRouter = express.Router();

contactRouter.route('/')
    .get((req, res, next) => {
        Contact.find()
            .then(contact => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(contact);
            })
            .catch(err => next(err));
    })
    .post(authenticate.verifyUser, (req, res) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /contact`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /contact`);
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /contact`);
    });

module.exports = contactRouter;