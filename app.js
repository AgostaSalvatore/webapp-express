const express = require("express"); //import express
const app = express(); //create app
const PORT = 3000; //port

//middleware
app.use(express.static("public"));
app.use(express.json());

//entry point
app.get("/", (req, res) => {
    res.send("Hello World!");
});

//listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});