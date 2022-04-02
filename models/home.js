const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
}, { timestamps: true });

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;