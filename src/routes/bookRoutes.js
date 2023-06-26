const express = require("express");
const { tokenVerifier } = require("../utils/token");

const bookRouter = express.Router();
const {
  displayAllBooks,
  displayBookById,
  createBook,
} = require("../controllers/bookControllers");

const tokenValidateMiddleware = require("../middlewares/tokenValidateMiddleware");
const adminTokenValidation = require("../middlewares/adminTokenValidation");
const newBookMiddleware = require("../middlewares/newBookMiddleware");

bookRouter.get("/books", tokenValidateMiddleware, displayAllBooks);
bookRouter.get("/books/:id", tokenValidateMiddleware, displayBookById);
bookRouter.post("/books", adminTokenValidation, newBookMiddleware, createBook);
module.exports = bookRouter;
