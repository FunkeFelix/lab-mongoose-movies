const express = require("express");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");
const router = express.Router();

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then((celeb) => {
      res.render("celebrities/index", { celebList: celeb });
    })
    .catch((err) => console.log(err));
});

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

router.get("/celebrities/:id", (req, res) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId).then((celebDetails) => {
    console.log(celebDetails);
    res.render("celebrities/show", { celebDetails });
  });
});

router.get("/celebrities/delete/:id", (req, res) => {
  Celebrity.deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/celebrities", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  console.log(name, occupation, catchPhrase);
  Celebrity.create({
    name,
    occupation,
    catchPhrase,
  }).then((celeb) => {
    res.redirect(`/celebrities/${celeb._id}`);
  });
});

module.exports = router;
