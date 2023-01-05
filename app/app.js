const cors = require('cors');
const express = require('express');
const mysql = require('mysql2');

require('dotenv').config();

// console.log(process.env.MYSQL_PASSWORD);

const app = express();

app.use(cors());
app.use(express.json());

const mysqlConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
};

const connection = mysql.createConnection(mysqlConfig);

//7 uzduotis vienas sprendimas
// app.get('/expenses/:id', (req, res) => {
//     const { id } = req.params;
//     connection.execute('SELECT * FROM expenses WHERE userId=?', [id], (err, expenses) => {
//         res.send(expenses);
//     });
// });

//7 uzduotis kitas sprendimas
app.get('/expenses', (req, res) => {
    const { userId } = req.query;
    connection.execute('SELECT * FROM expenses WHERE userId=?', [userId], (err, expenses) => {
        res.send(expenses);
    });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));