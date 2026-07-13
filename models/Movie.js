const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  poster: String,
  description: String,
  rating: Number,
  trailer: String,
  watched: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model(
  "Movie",
  movieSchema
);