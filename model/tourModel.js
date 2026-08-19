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

module.exports = {
    getAll,
    getById
};