import { Schema, model, Types } from 'mongoose';

// Create schema 
const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: [5, 'Title must be at least 5 characters'],
        maxLength: [255, 'Title must be at most 255 characters'],
        match: [/^[a-zA-Z 0-9]+$/, 'Title should be alphanumeric, digits and whitespace only!'],
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        minLength: [5, 'Genre must be at least 5 characters'],
        maxLength: [255, 'Title must be at most 255 characters'],
        match: [/^[a-zA-Z 0-9]+$/, 'Title should be alphanumeric, digits and whitespace only!'],
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: ['tv-show', 'animation', 'movie', 'documentary', 'short-film'],
    },
    director: {
        type: String,
        required: [true, 'Director is required'],
        minLength: [5, 'Director must be at least 5 characters'],
        maxLength: [255, 'Title must be at most 255 characters'],
        match: [/^[a-zA-Z 0-9]+$/, 'Director should be alphanumeric, digits and whitespace only!'],
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
        min: [1900, 'Year must be a valid year'],
        max: [2025, 'Year must be a valid year'],


    },
    imageUrl: {
        type: String,
        match: /https?:\/\//,
    },
    rating: {
        type: Number,
        default: 1,
        min: 1,
        max: 5,
    },
    description: {
        type: String,
        minLength: 20,
        match: /^[a-zA-Z 0-9]+$/,
    },
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }],
    creator: {
        type: Types.ObjectId,
        ref: 'User',
    }

});

// Create model
const Movie = model('Movie', movieSchema);

export default Movie;