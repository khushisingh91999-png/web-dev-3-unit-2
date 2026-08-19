const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");

// Route to get all tours
router.get("/", tourController.getAllTours);

// Route to get tour by ID
router.get("/:id", tourController.getTourById);

module.exports = router;