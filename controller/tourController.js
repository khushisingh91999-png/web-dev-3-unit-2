const tourModel = require('../models/tourModel');

// Get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};

//Get tour by ID
const getTourById = (req, res) => {
    const tourId = parseInt(req.params.id);
    const tour = tourModel.getById(tourId);
    if (!tour) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    res.json(tour);
};

// Get tours by query
const getToursByQuery = (req, res) => {
    const query = req.query.name; // Assuming the query parameter is 'name'
    const tours = tourModel.getByQuery(query);
    res.json(tours);
};

const saveTours = (tours) => {
    tourModel.saveTours(tours);
}

module.exports = {
    getAllTours,
    getTourById,
    getToursByQuery,
    saveTours
};


    

