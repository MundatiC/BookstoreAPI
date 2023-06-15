const express = require("express");

const loanRouter = express.Router();
const {
    borrowBook,
    returnBook
} = require("../controllers/loanControllers");

loanRouter.post("/borrow", borrowBook);

loanRouter.post("/return", returnBook)



module.exports = loanRouter;
