const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
        }
    },
    {
        timestamp: true
    }
);

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;