const express = require("express");

const loanRouter = express.Router();
const tokenValidateMiddleware = require('../middlewares/tokenValidateMiddleware');
const {
    borrowBook,
    returnBook
} = require("../controllers/loanControllers");

loanRouter.post("/borrow", tokenValidateMiddleware, borrowBook);

loanRouter.post("/return",tokenValidateMiddleware, returnBook)



module.exports = loanRouter;
