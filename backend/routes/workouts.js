const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "get all." });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "get one." });
});

router.post("/", (req, res) => {
  res.json({ msg: "post one" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "delete." });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "update." });
});

module.exports = router;
