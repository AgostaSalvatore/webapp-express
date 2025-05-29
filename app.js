const express = require("express");
const app = express();
const PORT = 3000;

//middleware
app.use(express.static("public"));
app.use(express.json());

