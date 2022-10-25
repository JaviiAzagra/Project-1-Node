const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;
const server = express();

const connectDb = require('./utils/db');
connectDb();
const Movie = require('./models/movie');

const router = express.Router();


//* Devuelve todas las peliculas
router.get('/movies', (request, response) => {

    Movie.find()
    .then(movies => {

        return response.status(200).json(movies);

    }).catch((error) => {
      
        return response.status(500).json(error);
    })
});

//* Devuelve las peliculas buscando por su ID
router.get('/movies/:id', (request, response) => {

    const id = request.params.id;
   
    Movie.findById(id)
    .then(movies => {

        return response.status(200).json(movies);

    }).catch((error) => {
      
        return response.status(500).json(error);
    })
});

//* Devuelve las peliculas buscando por el titulo
router.get('/movies/title/:title', (request, response) => {

    const title = request.params.title;
   
    Movie.find( {title: title} )
    .then(movies => {

        return response.status(200).json(movies);

    }).catch((error) => {
      
        return response.status(500).json(error);
    })
});

//* Devuelve segun el genero
router.get('/movies/genre/:genre', (request, response) => {

    const genre = request.params.genre;
   
    Movie.find( {genre: genre} )
    .then(movies => {

        return response.status(200).json(movies);

    }).catch((error) => {
      
        return response.status(500).json(error);
    })
});

//* Devuelve las peliculas mayores al año que tu le indiques
router.get('/movies/year/:year', (request, response) => {

    const year = request.params.year;
   
    Movie.find( {year: {$gt: year}} )
    .then(movies => {

        return response.status(200).json(movies);

    }).catch((error) => {
      
        return response.status(500).json(error);
    })
});

server.use('/', router);

server.listen(PORT, () => {
    console.log(`Servidor encendido http://localhost:${PORT}`);
});

