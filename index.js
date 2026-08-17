const express = require('express');
const app = express();

const packages = require('./data/tour');

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/packages', (req, res) => {
    res.json(packages);
});


app.get('/packages/:id', (req, res) => {
    const packageId = parseInt(req.params.id);
    const selectedPackage = packages.find(pkg => pkg.id === packageId);
    res.json(selectedPackage);
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

