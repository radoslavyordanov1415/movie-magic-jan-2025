import express from 'express';
import handlebars from 'express-handlebars';
import homeController from './controllers/home-controller.js'
import routes from './routes.js'
import router from './controllers/home-controller.js';


const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('/static', express.static('src/public'))

app.use(homeController);


app.use(routes);



app.listen(5000, () => console.log('Server listening on port http://localhost:5000...'));

