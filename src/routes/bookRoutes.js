const express = require("express");

const router = express.Router();
const { displayAllBooks } = require("../controllers/bookControllers");

router.get("/books", displayAllBooks);

module.exports = router;
