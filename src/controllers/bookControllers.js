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
    console.log(id);
    if (result.recordset.length > 0) {
      res.status(200).json({
        success: true,
        message: "Retrieved book successfully",
        data: result.recordset,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book does not exist",
      });
    }
  }
}
async function createBook(req, res) {
  let sql = await mssql.connect(config);
  if (sql.connected) {
    const { Title, Author, PublicationYear, Status } = req.body;
    let request = sql
      .request()
      .input("Title", Title)
      .input("Author", Author)
      .input("PublicationYear", PublicationYear)
      .input("Status", Status);
    let result = await request.execute("InsertBook");
    res.json({
      success: true,
      message: "Book created successfully",
      data: result.recordset,
    });
  }
}
module.exports = {
  displayAllBooks,
  displayBookById,
  createBook,
};
