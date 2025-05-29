const connection = require("../data/db");

const index = (req, res) => {
    connection.query('SELECT * FROM movies', (err, moviesResult) => {
        if (err) return res.status(500).json({ error: "Database Query Failed:" + err });
        res.json(moviesResult);
    })
}

const show = (req, res) => {
    console.log("dettaglio film")
}

module.exports = {
    index,
    show
}