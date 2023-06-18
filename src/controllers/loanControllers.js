const mssql = require("mssql");
const config = require("../config/config");

async function borrowBook(req, res) {
    const { memberName, bookTitle } = req.body;
  
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
  
  async function returnBook(req, res) {
    const { memberName, bookTitle } = req.body;
  
    let sql = await mssql.connect(config);
    if (sql.connected) {
      const request = sql.request();
      request.input("MemberName", mssql.VarChar(255), memberName);
      request.input("BookTitle", mssql.VarChar(255), bookTitle);
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

module.exports = {
    borrowBook,
    returnBook
}  
  