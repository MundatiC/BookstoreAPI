const express = require("express");
const {tokenVerifier} = require('../utils/token')

const bookRouter = express.Router();
const {
  displayAllBooks,
  displayBookById,
  createBook,
} = require("../controllers/bookControllers");


const tokenValidateMiddleware = require('../middlewares/tokenValidateMiddleware');



bookRouter.get("/books" , tokenValidateMiddleware,displayAllBooks); 
bookRouter.get("/books/:id", displayBookById);
bookRouter.post("/books", createBook);
module.exports = bookRouter;
