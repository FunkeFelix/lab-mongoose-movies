const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
const Celebrity = require("../models/Celebrity");

router.get("/movies/new", (req, res) => {
  Celebrity.find().then((dbCeleb) => {
    res.render("movies/new", { dbCeleb });
  });
});

router.post("/movies", (req, res) => {
  const { title, genre, plot, cast } = req.body;
  console.log(req.body);
  Movie.create({
    title,
    genre,
    plot,
    cast,
  }).then((movie) => {
    res.redirect(`/movies`);
  });
});

router.get("/movies", (req, res) => {
  Movie.find()
    .populate("cast")
    .then((data) => {
      res.render("movies/show", { movieList: data });
    });
});

module.exports = router;
