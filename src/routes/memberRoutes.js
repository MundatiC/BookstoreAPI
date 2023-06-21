const express = require("express");

const memberRouter = express.Router();
const {
  getMemberById,
  getMembersWithLoans,
  registerUser,
  loginUser,
} = require("../controllers/memberControllers");

const sendMail = require('../utils/sendMail');
const newUserMiddleware = require("../middlewares/newUserMiddleware");
const tokenValidateMiddleware = require("../middlewares/tokenValidateMiddleware");

memberRouter.get("/members/:id", tokenValidateMiddleware, getMemberById);

memberRouter.get("/loans/members", tokenValidateMiddleware, getMembersWithLoans);

memberRouter.post("/register", newUserMiddleware, registerUser);

memberRouter.post("/login", loginUser);

memberRouter.post("/sendMail", (req, res) => {
  sendMail()
  res.send("Sent an email, Goto console")

})

module.exports = memberRouter;