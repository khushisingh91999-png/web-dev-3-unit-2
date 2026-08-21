const fs = require('fs');
const path = require('path');
const toursFilePath = path.join(__dirname, '../data/tour.json');

const getAll = () => {
    const tours = fs.readFileSync(toursFilePath, 'utf-8');
    return JSON.parse(tours);
}

const getById = (id) => {
    const tours = getAll();
    return tours.find(tour => tour.id === id);
}
const getByQuery = (query) => {
    const tours = getAll();
    return tours.filter(tour => tour.name.includes(query));
        // Implement your query logic here
};

const saveTours = (newTours) => {
    const tours = getAll();
    tours.push(newTours);

    fs.writeFileSync(toursFilePath, JSON.stringify(tours));
}

const updateTour = (id, updatedTour) => {
    const tours = getAll();
    const index = tours.findIndex(tour => tour.id === id);
    if (index === -1) {
        return null; // Tour not found
    }
    tours[index] = { id, ...updatedTour };
    fs.writeFileSync(toursFilePath, JSON.stringify(tours));
    return tours[index];
};

module.exports = {
    getAll,
    getById,
    getByQuery,
    saveTours,
    updateTour
};