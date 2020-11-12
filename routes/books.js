const express = require("express");
const router = express.Router();

const {
    getBooks,
    addBook,
    getBookById,
    updateBook,
    deleteBook,
} = require("../controllers/bookContoller");

router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.post("/", addBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;