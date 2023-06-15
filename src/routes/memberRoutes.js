const express = require("express");

const memberRouter = express.Router();
const {
    createMember,
    getMemberById,
    getMembersWithLoans,
} = require("../controllers/memberControllers");

memberRouter.post("/members", createMember);

memberRouter.get("/members/:id", getMemberById)

memberRouter.get("/loans/members", getMembersWithLoans)

module.exports = memberRouter;
