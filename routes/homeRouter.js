const express = require('express');

const homeRouter = express.Router();

homeRouter.route('/').all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
    .get((req, res) => {
        res.end('Home page view');
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
        res.end('There is nothing to delete');
    });

modules.exports = homeRouter;