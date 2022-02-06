const MovieAccessor = require('../accessor/movieAccessor');

function addNewMovie(title, rating, cb) {
  MovieAccessor.addNewMovie(title, rating, cb);
}

module.exports = {
  addNewMovie
};
