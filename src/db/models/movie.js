const mongoose = require('mongoose');
const movieSchema = require('../schema/movie').movieSchema;

const Movie = mongoose.model('Movie', movieSchema);

module.exports = {
  Movie
};
