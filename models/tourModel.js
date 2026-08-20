const fs = require('fs');
const path = require('path');
const toursFilePath = path.join(__dirname, '../data/tour.json');

const getAll = () => {
    const toursData = fs.readFileSync(toursFilePath, 'utf-8');
    return JSON.parse(toursData);
}

const getById = (id) => {
    const toursData = getAll();
    return toursData.find(tour => tour.id === id);
}
const getByQuery = (query) => {
    const toursData = getAll();
    return toursData.filter(tour => tour.name.includes(query));
        // Implement your query logic here
};

const saveTours = (tours) => {
    fs.writeFileSync(toursFilePath, JSON.stringify(tours, null, 2));
}

module.exports = {
    getAll,
    getById,
    getByQuery,
    saveTours
};