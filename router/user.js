const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const result = {
    nickname: "minseon",
    imgUrl: "https://gdsc-seoultech.github.io/img/square_logo.png",
  };
  return res.status(200).send(result);
});

module.exports = router;
