const connection = require("../data/db");

const index = (req, res) => {
    connection.query('SELECT * FROM movies', (err, moviesResult) => {
        if (err) return res.status(500).json({ error: "Database Query Failed:" + err });
        res.json(moviesResult);
    })
}

const show = (req, res) => {
    const { id } = req.params

    const movieSql = 'SELECT * FROM movies WHERE id = ?';

    const reviewSql = 'SELECT * FROM reviews WHERE movie_id = ?';

    connection.query(movieSql, [id], (err, movieResult) => {
        if (err) return res.status(500).json({ error: "Database Query Failed:" + err });

        if (movieResult.length === 0) return res.status(404).json({ error: "Movie not found" });

        const movie = movieResult[0];

        connection.query(reviewSql, [id], (err, reviewResult) => {
            if (err) return res.status(500).json({ error: "Database Query Failed:" + err });
            movie.reviews = reviewResult;
            res.json(movie);
        })
    })
}

module.exports = {
    index,
    show
}