const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
  res.send("I got here for no reason");
});

module.exports = router;
