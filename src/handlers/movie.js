const MovieService = require('../service/movie');

function addNewMovie(req, res) {
  const title = req.query.title;
  const rating = req.query.rating;
  console.log(`Trying to add a new movie with title ${title} and rating ${rating}`);
  MovieService.addNewMovie(title, rating, function(err) {
    if (err) {
      res.status(500).send(err.message);
    }
    else {
      res.status(200).send('Added new movie!');
    }
  });
  // res.status(200).send('Added the movie');
}

module.exports = {
  addNewMovie
};
