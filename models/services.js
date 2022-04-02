const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicesSchema = new Schema(
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
            required: true
        }
    }, {
    timestamp: true
}
);

const Services = mongoose.model('Services', servicesSchema);

module.exports = Services;