const connection = require("../data/db");

const index = (req, res) => {
    console.log("elenco film")
}

const show = (req, res) => {
    console.log("dettaglio film")
}

module.exports = {
    index,
    show
}