const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
        },
        image: {
        type: String,
    }
  },
  { timestamps: true }
);

const About = mongoose.model("About", aboutSchema);

module.exports = About;