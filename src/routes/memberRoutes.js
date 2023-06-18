const express = require("express");

const memberRouter = express.Router();
const {
  createMember,
  getMemberById,
  getMembersWithLoans,
  registerUser,
} = require("../controllers/memberControllers");

memberRouter.post("/members", createMember);

memberRouter.get("/members/:id", getMemberById);

memberRouter.get("/loans/members", getMembersWithLoans);

memberRouter.post("/register", registerUser);

module.exports = memberRouter;
