const express = require("express");

const router = express.Router();
const {
  displayAllBooks,
  displayBookById,
} = require("../controllers/bookControllers");

router.get("/books", displayAllBooks);
router.get("/books/:id", displayBookById);
module.exports = router;
