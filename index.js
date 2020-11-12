const express = require("express");
// const port = 3000;
const app = express();

const database = require("./services/database");
const BookRouter = require("./routes/books");

app.use(express.json());
app.use("/api/bookstore", BookRouter);
database.connect();

app.listen(8000, console.log("Server running on port 8000"));