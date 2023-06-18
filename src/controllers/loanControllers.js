const mssql = require("mssql");
const config = require("../config/config");

const { tokenVerifier } = require('../utils/token')

async function borrowBook(req, res) {
  let token = req.headers['authorization'].split(" ")[1]

  try {

    let user = await tokenVerifier(token)
    const { memberName, bookTitle } = req.body;

    if (user) {
      let sql = await mssql.connect(config);
      if (sql.connected) {
        const request = sql.request();
        request.input("MemberName", memberName);
        request.input("BookTitle", bookTitle);
        let result = await request.execute("BorrowBookProcedure");

        if (result.recordset.length === 0) {
          res.json({
            success: false,
            message: "Member or book not found",
          });
        } else {
          res.json({
            success: true,
            message: "Book borrowed successfully",
            data: result.recordset[0],
          });
        }
      }

    }

  } catch (error) {

    if (error.message.includes('token') || error.message.includes('invalid')) {
      res.status(403).json(
        {
          success: false,
          message: 'Login again'
        }
      )

    } else if (error.message.includes('expired')) {
      res.status(403).json({
        success: false,
        message: 'Token expired login again'
      })
    }

  }



}

async function returnBook(req, res) {
  const { tokenVerifier } = require('../utils/token')

  let token = req.headers['authorization'].split(" ")[1]

  try {
    const { memberName, bookTitle } = req.body;
    let user = await tokenVerifier(token)

    if (user) {
      let sql = await mssql.connect(config);
      if (sql.connected) {
        const request = sql.request();
        request.input("MemberName", memberName);
        request.input("BookTitle", bookTitle);
        let result = await request.execute("ReturnBookProcedure");

        const returnStatus = result.recordset[0].ReturnStatus;
        if (returnStatus === 1) {
          res.json({
            success: true,
            message: "Book returned successfully",
            result: result.recordset[0],
          });
        } else {
          res.json({
            success: false,
            message: "Failed to return the book. Please check the provided information.",
          });
        }
      }

    }



  } catch (error) {
    if (error.message.includes('token') || error.message.includes('invalid')) {
      res.status(403).json(
        {
          success: false,
          message: 'Login again'
        }
      )

    } else if (error.message.includes('expired')) {
      res.status(403).json({
        success: false,
        message: 'Token expired login again'
      })
    }

  }

}

module.exports = {
  borrowBook,
  returnBook
}