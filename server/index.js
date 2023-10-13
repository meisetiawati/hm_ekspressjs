const express = require('express');
const sequelize = require('sequelize');
const film = sequelize.define('./router/film');
const Category = sequelize.define('./router/category');
const app = express();
const port = 3000;
const sequelize = new sequelize('dvdrental','root','', {
    host: 'localhost',
    dialect: 'mysql',
});


app.get('/film', async(req, res) => {
    const film = await film.findAll();
    res.json(film);
});

app.get('/film/:film_id', async(req, res) => {
    const film = await film.findByPk(reg.params.id);
    res.json(film);
});

app.get('/category', async(req, res) => {
    const category = await category.findAll();
    res.json(category);
});

app.get('/film/category/:category', async(req, res) => {
    const film = await film.findAll({
        where: {category_id: reg.params.category},
    });
    res.json(film);
});


app.listen(port, () => {
console.log(`Server berjalan di port ${port}`);
});