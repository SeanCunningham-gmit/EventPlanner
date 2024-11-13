// models/movie.js
const mongoose = require('mongoose');

// Define the schema for a Movie
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  imdbID: String,
  type: String,
  poster: String
});

// Create the Movie model from the schema
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
