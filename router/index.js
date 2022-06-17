const express = require("express");
const router = express.Router();

const homeRouter = require("./home");
const userRouter = require("./user");

router.use("/home", homeRouter);
router.use("/user", userRouter);

module.exports = router;
