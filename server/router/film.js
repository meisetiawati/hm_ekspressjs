const express = require('express');
const router = express.Router();
const connection = require('../config/db')

router.get('/film', function (request, response) {
    try {
        const { rows } = connection.query('SELECT * FROM public.film ORDER BY film_id ASC')

        if (rows) res.status(200).json(rows)
        else throw new Error;
    } catch (err) {
        res.status(500).json({ error: 'data is not available'})
    }
});

router.get('/film/:film_id', function (request, response) {
    try {
        const { rows } = connection.query('SELECT * FROM public.film WHERE film_id = $1', [req.params.film_id])

        if (rows) res.status(200).json(rows)
        else throw new Error;
    } catch (err) {
        res.status(500).json({ error: 'data is not available'})
    }
});

module.exports = router;