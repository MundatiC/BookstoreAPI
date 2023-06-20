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

memberRouter.get("/members/:id", getMemberById);

memberRouter.get("/loans/members", getMembersWithLoans);

memberRouter.post("/register", newUserMiddleware, registerUser);

memberRouter.post("/login", loginUser);

memberRouter.post("/sendMail", (req, res)=> {
  sendMail()
  res.send("Sent an email, Goto console")

})

module.exports = memberRouter;