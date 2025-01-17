import { Router } from "express";

const router = Router();


router.get('/modular-router', (req, res) => {
    res.send('Modular router')
});

export default router;


router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (req, res) => {
    res.render('about');
})