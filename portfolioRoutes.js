const express = require("express");
const router = express.Router();

const Portfolio = require("../models/portfolio");

// Get Portfolio Data
router.get("/", async (req, res) => {
  try {
    const data = await Portfolio.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;