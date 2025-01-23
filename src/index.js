import express from 'express';
import handlebars from 'express-handlebars';
import homeController from './controllers/home-controller.js'
import routes from './routes.js'
import showRatingHelper from './helpers/rating-helper.js';
import mongoose from 'mongoose';

const app = express();

// Db configuration
try {
    const uri = 'mongodb://localhost:27017/magic-movies-jan2025'
    await mongoose.connect(uri);

    console.log('Connected to the database...');
} catch (err) {
    console.log('Error connecting to the database...');
    console.error(err);
}


// Handlebars configuration
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        showRating: showRatingHelper,
    }
}));


app.set('view engine', 'hbs');
app.set('views', './src/views');


// Express configuration
app.use('/static', express.static('src/public'))
app.use(express.urlencoded({ extended: false })); // Learn express to parse form data 

app.use(homeController);

// Setup routes
app.use(routes);


// Start the server
app.listen(5000, () => console.log('Server listening on port http://localhost:5000...'));

