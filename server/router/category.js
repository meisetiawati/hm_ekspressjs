const express = require('express');
const router = express.router();
const connection = require('../config/db')


router.get('/', function (request, response) {
    try {
        const { rows } = connection.query('SELECT * FROM public.category')

        if (rows) res.status(200).json(rows)
        else throw new Error;
    } catch (err) {
        res.status(500).json({ error: 'data is not available'})
    }
});

router.get('/category/:category_id/film', function (request, response) {
    try {
        const { rows } = connection.query('SELECT * FROM public.film WHERE film_id = $1', [req.params.category_id])

        if (rows) res.status(200).json(rows)
        else throw new Error;
    } catch (err) {
        res.status(500).json({ error: 'data is not available'})
    }
});

module.exports = router