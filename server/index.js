const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('dvdrental','root','', {
    host: 'localhost',
    dialect: 'mysql'
});
const app = express();
const port = 3000;

const film = sequelize.define('./router/film', {
    film_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    release_year: {
        type: DataTypes.DATE
    },
    language_id: {
        type: DataTypes.INTEGER
    },
    rental_rate: {
        type: DataTypes.DECIMAL
    },
    length: {
        type: DataTypes.INTEGER
    },
    replacement_cost: {
        type: DataTypes.DECIMAL
    },
    rating: {
        type: DataTypes.STRING
    },
    last_update: {
        type: DataTypes.DATE
    },
    special_features: {
        type: DataTypes.TEXT
    },
    full_text: {
        type: DataTypes.STRING
    },

});

const Category = sequelize.define('./router/category', {
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    last_update: {
        type: DataTypes.DATE
    },

});


app.get('/film', async(req, res) => {
    const film = await film.findAll();
    res.json(film);
});

app.get('/film/:film_id', async(req, res) => {
    const film = await film.findByPk(reg.params.film_id);
    res.json(film);
});

app.get('/category', async(req, res) => {
    const category = await category.findAll();
    res.json(category);
});

app.get('/film/category/:category', async(req, res) => {
    const film = await film.findAll({
        where: {category_id: reg.params.category}
    });
    res.json(film);
});


app.listen(port, () => {
console.log(`Server berjalan di port ${port}`);
});