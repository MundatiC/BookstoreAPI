const express = require("express");

const router = express.Router();
const {
  displayAllBooks,
  displayBookById,
  createBook,
} = require("../controllers/bookControllers");

router.get("/books", displayAllBooks);
router.get("/books/:id", displayBookById);
router.post("/books", createBook);
module.exports = router;
