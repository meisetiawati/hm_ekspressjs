const mysql = require('mysql').connection
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'dvdrental'

})

connection.connect();

const getUser = (request, response) => {
    connection.query('SELECT * FROM actor ', (err, rows, field) => {
    if (err) throw error;
    })
    response.status(200).json(results.rows)
}

connection.end();