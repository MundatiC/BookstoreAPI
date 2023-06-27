const express = require("express");

const loanRouter = express.Router();
const tokenValidateMiddleware = require('../middlewares/tokenValidateMiddleware');
const {
    borrowBook,
    returnBook,
    GetBorrowedBooksByUser,
    GetReturnedBooksByUser,
    OverdueBooksByUser
} = require("../controllers/loanControllers");

loanRouter.post("/borrow", tokenValidateMiddleware, borrowBook);

loanRouter.post("/return",tokenValidateMiddleware, returnBook)

loanRouter.get("/overdueloans",tokenValidateMiddleware, OverdueBooksByUser)
loanRouter.get("/borrowedBooksByID",tokenValidateMiddleware, GetBorrowedBooksByUser)
loanRouter.get("/returnedbooks",tokenValidateMiddleware, GetReturnedBooksByUser)



module.exports = loanRouter;
