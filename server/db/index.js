const { request, response } = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'dvdrental'
});

const fs = require('fs');
const seedQuery = fs.readFileSync('db/seeding.sql', {encoding: 'utf-8'});

connection.connect();

connection.query(seedQuery, (err, res) => {
    console.log(err, res)
    connection.end()
});

