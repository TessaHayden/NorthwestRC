const express = require('express');
const Gallery = require('../models/gallery');

const galleryRouter = express.Router();

galleryRouter.route('/')
    .get((req, res, next) => {
        Gallery.find()
            .then(gallery => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(gallery);
            })
            .catch(err => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /gallery`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not support on /gallery`);
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /gallery`)
    });


module.exports = galleryRouter;