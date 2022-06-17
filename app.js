const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");
const router = require("./router/index");

app.listen(port, () => {
  console.log("server on");
});
app.use(cors("*"));
app.use(router);
router.use("/api", router);
