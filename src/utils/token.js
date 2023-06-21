const jwt = require("jsonwebtoken");
require("dotenv").config();

const tokenGenerator = async (data) => {
  return jwt.sign(data, process.env.SECRET, { expiresIn: "3600s" });
};

function tokenVerifier(token) {
  return jwt.verify(token, process.env.SECRET);
}

module.exports = { tokenGenerator, tokenVerifier };
