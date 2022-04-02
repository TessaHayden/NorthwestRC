const express = require('express');
const Contact = require('../models/contact');
const { body, validationResult } = require('express-validator');

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
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /contact`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /contact`);
})