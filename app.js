const express = require("express"); //import express
const app = express(); //create app
const PORT = process.env.SERVER_PORT || 3000; //port
const cors = require("cors"); //import cors

//router
const movieRouter = require("./routers/movieRouter");

//custom middleware
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const imagePathMiddleware = require("./middlewares/imagePath");

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(imagePathMiddleware);

//cors
app.use(cors({ origin: process.env.FE_APP }));

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