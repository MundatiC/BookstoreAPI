const express = require("express");

const memberRouter = express.Router();
const {
  getMemberById,
  getMembersWithLoans,
  registerUser,
} = require("../controllers/memberControllers");


memberRouter.get("/members/:id", getMemberById);

memberRouter.get("/loans/members", getMembersWithLoans);

memberRouter.post("/register", registerUser);

module.exports = memberRouter;
