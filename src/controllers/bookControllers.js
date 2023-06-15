const mssql = require("mssql");
const config = require("../config/config");

async function displayAllBooks(req, res) {
  let sql = await mssql.connect(config);
  if (sql.connected) {
    let request = sql.request();
    let result = await request.execute("getAvailableBooks");
    console.log(result);
    res.json({
      success: true,
      message: "Retrieved books successfully",
      data: result.recordset,
    });
  }
}
async function displayBookById(req, res) {
  let sql = await mssql.connect(config);
  if (sql.connected) {
    const { id } = req.params;
    let request = sql.request();
    request.input("BookID", id);
    let result = await request.execute("getBookById");
    console.log(result);
    res.json({
      success: true,
      message: "Retrieved book successfully",
      data: result.recordset,
    });
  }
}
module.exports = {
  displayAllBooks,
  displayBookById,
};
