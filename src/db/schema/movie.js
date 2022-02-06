const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  rating: Number,
  dateAdded: Date,
});

module.exports = {
  movieSchema
};
