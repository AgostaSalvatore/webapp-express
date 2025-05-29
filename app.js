const express = require("express"); //import express
const app = express(); //create app
const PORT = process.env.SERVER_PORT || 3000; //port

//router
const movieRouter = require("./routers/movieRouter");

//custom middleware
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

//middleware
app.use(express.static("public"));
app.use(express.json());

//entry point
app.get("/", (req, res) => {
    res.send("API MOVIES");
});

//use router
app.use("/api/movies", movieRouter);

//use custom middleware
app.use(notFound)
app.use(errorHandler)

//listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});