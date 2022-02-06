const Movie = require('../db/models/movie').Movie;

function addNewMovie(title, rating, cb){
  const movie = new Movie({ title: title, rating: rating, dateAdded: Date.now()} );
  movie.save(cb);
}

module.exports = {
  addNewMovie
};
