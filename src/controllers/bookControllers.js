const mssql = require("mssql");
const config = require("../config/config");

async function displayAllBooks(req, res) {
  let sql = await mssql.connect(config);
  if (sql.connected) {
    let result = await sql.query("SELECT * FROM Library.Books");
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
  const { id } = req.params;
  if (sql.connected) {
    let result = await sql.query(
      `SELECT * FROM Library.Books WHERE BookID = ${id}`
    );
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
