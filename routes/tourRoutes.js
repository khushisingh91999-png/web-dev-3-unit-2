const express = require("express");
const router = express.Router();
const tourController = require("../controller/tourController");

// Route to get all tours
router.get("/tour", tourController.getAllTours);

// Route to get tour by ID
router.get("/tour/:id", tourController.getTourById);

// Route to get tours by query
router.get("/tour/search", tourController.getToursByQuery);

router.post("/tour", (req, res) => {
    const newTour = req.body;
    const tours = tourController.getAllTours(req, res);
    tours.push(newTour);
    tourController.saveTours(tours);
    res.status(201).json(newTour);
});

module.exports = router;