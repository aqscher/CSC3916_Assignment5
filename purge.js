require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('./Movies');

mongoose.connect(process.env.DB).then(async () => {
    await Movie.deleteMany({});
    console.log('All movies deleted');
    mongoose.disconnect();
});