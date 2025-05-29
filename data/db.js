const mysql = require("mysql2");  //import mysql

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ciaociao",
    database: "db_movies"
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL database!");
});

module.exports = connection;
