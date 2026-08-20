const tourModel = require('../models/tourModel');

// Get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};

// Get tour by ID
// const getTourById = (req, res) => {
//     const tourId = parseInt(req.params.id);
//     const tour = tourModel.getById(tourId);
//     res.json(tour);
// };

module.exports = {
    getAllTours
};
