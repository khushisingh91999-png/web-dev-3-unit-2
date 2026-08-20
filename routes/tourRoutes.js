const express = require("express");
const router = express.Router();
const tourController = require("../controller/tourController");

// Route to get all tours
router.get("/tour", tourController.getAllTours);

// Route to get tour by ID
//router.get("/tour/:id", tourController.getTourById);

module.exports = router;