const mongoose = require('mongoose');

const Movie = require('../../models/movie');
require('dotenv').config();

const DB_URL = process.env.DB_URL;
const connectDb = require ('../db');

const movies = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Accion',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Accion',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animacion',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animacion',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficcion',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romantica',
    },
];

//* Generamos un nuevo array
const movieDocuments = movies.map(movie => new Movie(movie));

//* Conectamos con la base de datos
/* mongoose.connect(DB_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(async () => {

    //* en el momento en el que conseguimos conectar vamos a buscar todas las peliculas que tengamos y los guardamos en la variable allMovies 
    const allMovies = await Movie.find();

    //* comprobamos si hay peliculas o no  
    if (allMovies) {
        
        //* Eliminamos la colección en caso de que haya peliculas
        await Movie.collection.drop();
        console.log("Se han eliminado todas las peliculas");
    }

})
.catch((error) => console.log("las peliculas no se han podido eliminar " + error))
.then(async () => {

    //* después de eliminarlos vamos a insertar varios documentos en mi colección de peliculas
    await Movie.insertMany(movieDocuments);
    console.log("Se han generado las nuevas peliculas");

})
.catch((error) => console.log("No he podido meter las peliculas " + error))
.finally(() => mongoose.disconnect()); */

connectDb()
    .then(async () => {
        await Movie.collection.drop();
        console.log("se han añadido las peliculas");
    })
    .catch((error) => console.log("no se ha podido eliminar", error))
    .then(async () => {
        await Movie.insertMany(movieDocuments);
    })
    .catch((error) => console.log("no hemos podido meter las peliculas", error))
    .finally(() => mongoose.disconnect());
