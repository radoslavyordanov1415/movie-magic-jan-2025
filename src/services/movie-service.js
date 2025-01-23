//import movies from "../movies.js";
import { v4 as uuid } from 'uuid';
import Movie from "../models/Movie.js";

export default {

    getAll(filter = {}) {
        let result = Movie.find({})
        // if (filter.search) {
        //     result = result.filter(movie => movie.title.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase()));
        // }

        // if (filter.genre) {
        //     result = result.filter(movie => movie.genre.toLocaleLowerCase() === filter.genre);
        // }

        // if (filter.year) {
        //     result = result.filter(movie => movie.year === filter.year);
        // }
        return Movie.find({});
    },




    getOne(movieId) {
        const result = Movie.findById(movieId);

        return result;
    },

    create(movieData) {
        const result = Movie.create({
            ...movieData,
            rating: Number(movieData.rating),
            year: Number(movieData.year),
        });

        return result;
    }
}