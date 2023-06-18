const express = require("express");

const memberRouter = express.Router();
const {
  getMemberById,
  getMembersWithLoans,
  registerUser,
  loginUser,
} = require("../controllers/memberControllers");

memberRouter.get("/members/:id", getMemberById);

memberRouter.get("/loans/members", getMembersWithLoans);

memberRouter.post("/register", registerUser);

memberRouter.post("/login", loginUser);

module.exports = memberRouter;