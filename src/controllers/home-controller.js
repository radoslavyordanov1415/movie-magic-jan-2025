import { Router } from "express";
import movieService from "../services/movie-service.js";



const router = Router();

router.get('/', async (req, res) => {
    // *Second solution use .lean on query to get plain objects
    const movies = await movieService.getAll()

    //* First solution convert document to plain Objects #1
    //const plainMovies = movies.map(m => m.toObject());


    //*Third solution is to use allowPropertiesByDefault runtimeOptions in headers
    res.render('home', { movies });
});

router.get('/about', (req, res) => {
    res.render('about', { pageTitle: 'About' });
})

export default router;