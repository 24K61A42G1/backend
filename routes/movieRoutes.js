const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// Get all movies
router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// Get single movie
router.get("/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
});

// Mark as watched
router.put("/:id/watched", async (req, res) => {
    console.log("PUT route hit:", req.params.id);
    const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    { watched: true },
    { new: true },
    {}
  );

  res.json(movie);
});
// Add a new movie
router.post("/", async (req, res) => {
  try {
    const movie = new Movie({
      title: req.body.title,
      genre: req.body.genre,
      watched: req.body.watched || false,
      poster: req.body.poster
    });

    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
