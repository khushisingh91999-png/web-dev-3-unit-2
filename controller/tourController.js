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

const saveTours = (req, res) => {
    const tours = req.body;
    tourModel.saveTours(tours);
    res.status(201).json({ message: 'Tour saved successfully' });
};

const updateTour = (req, res) => {
    const tourId = parseInt(req.params.id);
    const updatedTour = req.body;
    tourModel.updateTour(tourId, updatedTour);
    res.status(200).json({ message: 'Tour updated successfully' });
}

module.exports = {
    getAllTours,
    getTourById,
    getToursByQuery,
    saveTours,
    updateTour

};


    

