const mongoose = require('mongoose');
const schema = mongoose.Schema;

const moviesSchema = new schema(
    {
        title: {type: String, required:true},
        director: {type: String, required:true},
        year: {type: Number, required:true},
        genre: {type: String, required:true},
    },
    {
        timestamps: true,
    },
);

const movies = mongoose.model('Movies', moviesSchema);
module.exports = movies;


