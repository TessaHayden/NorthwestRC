const express = require('express');
const Contact = require('../models/contact');
const authenticate = require('../authenticate');
const nodemailer = require('nodemailer');

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
        console.log(req.body);
        const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
        <li>Name: ${req.body.fname} ${req.body.lname}</li>
        <li>Phone: ${req.body.phone}</li>
        <li>Email: ${req.body.email}</li>
        <li>Message: ${req.body.message} </li>
        </ul>`;
        
        let transporter = nodemailer.createTransport({
            host: 'smtp.domain.email',
            port: 587,
            secure: false,
            auth: {
                user: 'gimpykat4261@gmail.com',
                pass: 'MichaelmyBalloon1!'
            },
        });
        let mailOptions = {
          from: '"NWRC contact" <tessahayden@gmail.com>',
          to: "gimpykat4261@gmail.com",
          subject: "New Contact Message from NWRC app",
          html: output,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(error);
          }
          console.log("Message sent: %s", info.messageId);
        });
        res.end('Your message has been sent!');
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