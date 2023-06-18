const mssql = require("mssql");
const config = require("../config/config");
const bcrypt = require("bcrypt");

async function getMemberById(req, res) {
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
}

async function getMembersWithLoans(req, res) {
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
}
async function registerUser(req, res) {
  const { Name, Address, ContactNumber, Password } = req.body;
  let sql = await mssql.connect(config);
  let hashed_password = await bcrypt.hash(Password, 8);
  if (sql.connected) {
    let result = await sql
      .request()
      .input("Name", Name)
      .input("Address", Address)
      .input("ContactNumber", ContactNumber)
      .input("Password", hashed_password)
      .execute("registerUser");
    let all_users = await sql
      .request()
      .input("Name", Name)
      .execute("getRegisteredUser");
    res.status(200).json({
      success: true,
      message: "Registered Successfully",
      result: all_users.recordset,
    });
  }
}

module.exports = {
  getMemberById,
  getMembersWithLoans,
  registerUser,
};
