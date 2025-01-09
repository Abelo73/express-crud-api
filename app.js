const express = require("express");
const app = express();
const bookRoute = require("./routes/bookRoutes");

app.use(express.json());

app.use("/books", bookRoute);
module.exports = app;
