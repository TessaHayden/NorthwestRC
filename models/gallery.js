const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gallerySchema = new Schema(
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
            required: true,
        },
    }, {
        timestamp: true
    }
)

const Gallery = mongoose.Schema('Gallery', gallerySchema);

module.exports = Gallery;