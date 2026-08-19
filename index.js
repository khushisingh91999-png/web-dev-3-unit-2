const express = require('express');
const app = express();

const tourRoutes = require('./routes/tourRoutes');

app.use(express.json());
app.use('/api', tourRoutes);

// const packages = require('./data/tour');

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });


// app.get('/packages', (req, res) => {
//     res.json(packages);
// });


// app.get('/packages/:id', (req, res) => {
//     const packageId = parseInt(req.params.id);
//     const selectedPackage = packages.find(pkg => pkg.id === packageId); // comparing what id we put in postman with the id in the packages array, if true then it will return the package with that id
//     res.json(selectedPackage);
// });


// const PORT = process.env.PORT || 3000;



app.listen(3000, () => {
  console.log(`Server is running on port 3000 `);
});

