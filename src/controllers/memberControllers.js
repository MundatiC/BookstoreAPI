const mssql = require("mssql");
const config = require("../config/config");
const bcrypt = require("bcrypt");
require("dotenv").config();

const getAUser = require("../utils/getAMember");
const { tokenGenerator } = require("../utils/token");
const { newMemberValidator } = require("../validators/newMemberValidator");
const { tokenVerifier } = require("../utils/token");
const sendMail = require("../utils/sendMail");



async function getMemberById(req, res) {
  try {
    let user = req.user;
    const { id } = req.params;

    let sql = await mssql.connect(config);

    if (sql.connected) {
      const request = sql.request();

      request.input("MemberID", id);

      let result = await request.execute("GetMemberByIdProcedure");

      if (result.recordset.length > 0) {
        res.json({
          success: true,

          message: "Retrieved member successfully",

          data: result.recordset[0],
        });
      } else {
        res.status(404).json({
          success: false,

          message: "Member not found",
        });
      }
    }
  } catch (error) {
    if (error.message.includes("token") || error.message.includes("invalid")) {
      res.status(403).json({
        success: false,
        message: "Login again",
      });
    } else if (error.message.includes("expired")) {
      res.status(403).json({
        success: false,
        message: "Token expired login again",
      });
    }
  }
}

async function getMembersWithLoans(req, res) {
  try {
    let user = req.user;

    let sql = await mssql.connect(config);

    if (sql.connected) {
      const request = sql.request();

      let result = await request.execute("GetMembersWithLoansProcedure");

      res.json({
        success: true,

        message: "Retrieved members with loans successfully",

        data: result.recordset,
      });
    }
  } catch (error) {
    if (error.message.includes("token") || error.message.includes("invalid")) {
      res.status(403).json({
        success: false,
        message: "Login again",
      });
    } else if (error.message.includes("expired")) {
      res.status(403).json({
        success: false,
        message: "Token expired login again",
      });
    }
  }
}
async function registerUser(req, res) {
  let user = req.body;
  // let salt = await bycrypt.genSalt(8);
  // let hashed_pwd = await bycrypt.hash(user.Password, salt)

  try {
    let { value } = req;

    let hashed_pwd = await bcrypt.hash(user.Password, 8);

    let sql = await mssql.connect(config);

    if (sql.connected) {
      let results = await sql
        .request()
        .input("Name", value.Name)
        .input("Address", value.Address)
        .input("ContactNumber", value.ContactNumber)
        .input("Password", hashed_pwd)
        .input("Email", value.Email)
        .execute("InsertMemberProcedure");

      // try {
      //   await sendMail(value.Name, value.Email);
      // } catch (error) {
      //   console.log(error);
      // }
     
      if (results.rowsAffected[0] > 0) {
       
        const message = {
          to: value.Email,
          from: process.env.EMAIL_USER,
          subject: "Hello from Bookstore API",
          text: `Dear ${value.Name},\n Welcome to BookstoreAPI! We're thrilled to have you as a new member of our community. This email serves as a warm introduction and a guide to help you get started on our platform.`,
        };
        await sendMail(message);
        console.log(results);

        res.status(201).send({
          success: true,
          message: "New member successfully added",
        });
      } else {
        res.status(500).send({
          success: false,
          message: "An error occurred",
        });
      }
    }
  } catch (error) {
    res.send(error.message);
  }
}
async function loginUser(req, res) {
  let { Email, Password } = req.body;
  try {
    let user = await getAUser(Email);

    if (user) {
      let passwords_match = await bcrypt.compare(Password, user.Password);
      if (passwords_match) {
        let token = await tokenGenerator({
          MemberID: user.MemberID,
          Email: user.Email,
          Name: user.Name,
        });
        console.log(token);

        res.json({
          success: true,
          message: "log in successful",
          token,
        });
      } else {
        res.status(401).json({
          success: false,
          message: "wrong credentials",
        });
      }
    } else {
      res.status(404).json({
        success: false,
        message: "No user found",
      });
    }
  } catch (error) {
    res.json(error);
  }
}
module.exports = {
  getMemberById,
  getMembersWithLoans,
  registerUser,
  loginUser,
};
