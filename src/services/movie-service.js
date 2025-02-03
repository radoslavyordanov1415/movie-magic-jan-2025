

import Movie from "../models/Movie.js";

export default {
    getAll(filter = {}) {
        let query = Movie.find({});
        //TODO: add case insensitive search

        if (filter.search) {
            query = query.where({ title: filter.search })
        }

        if (filter.genre) {
            //TODO: add case insensitive search
            query = query.where({ genre: filter.genre });
        }

        if (filter.year) {
            query = query.finwhered({ year: Number(filter.year) });
        }
        return query;
    },




    getOne(movieId) {
        const result = Movie.findById(movieId)

        return result;
    },

    getOneWithCast(movieId) {
        return this.getOne(movieId).populate('casts');
    },

    create(movieData, creatorId) {
        const result = Movie.create({
            ...movieData,
            rating: Number(movieData.rating),
            year: Number(movieData.year),
            creator: creatorId,

        });

        return result;
    },

    async attachCast(movieId, castId) {
        // Attach number #1
        // const movie = await Movie.findById(movieId)
        // movie.casts.push(castId);
        // await movie.save();
        // return movie;
        // Attach number #2
        return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
    },
    delete(movieId) {
        return Movie.findByIdAndDelete(movieId);
    },

    update(movieId, movieData) {
        return Movie.findByIdAndUpdate(movieId, movieData);
    }
}