const express = require("express");
const router = express.Router();

const { movieResult } = require("../constants/movieResult");
const { tvResult } = require("../constants/tvResult");

router.get("/movie", (req, res) => {
  return res.status(200).send(movieResult);
});

router.get("/tv", (req, res) => {
  return res.status(200).send(tvResult);
});

module.exports = router;
