const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema(
    {
        firstname: {
            type: String,
            required: [true, "Firstname is required"]
        },
        lastname: {
            type: String,
            required: [true, "Lastname is required"]
        },
        phone: {
            type: Number,
        },
        email: {
            type: Number,
        },
        message: {
            type: String,
            required: [true, "Please include message"]
        }
    },
    {
        timestamp: true
    }
);

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;