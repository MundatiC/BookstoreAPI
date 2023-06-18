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
  let user = req.body;
        // let salt = await bycrypt.genSalt(8);
        // let hashed_pwd = await bycrypt.hash(user.Password, salt)
        let hashed_pwd = await bcrypt.hash(user.Password, 8);


        let sql = await mssql.connect(config);

        if (sql.connected) {
            let results = await sql.request()
                .input("Name", user.Name)
                .input("Address", user.Address)
                .input("ContactNumber", user.ContactNumber)
                .input("Password", hashed_pwd)
                .execute("InsertMemberProcedure")

            console.log(results)
            res.send(results)

        }
}
async function loginUser(req, res) {
  let { MemberID, Password } = req.body;
  try {
    let sql = await mssql.connect(config);
    if (sql.connected) {
      let result = await sql
        .request()
        .input("MemberID", MemberID)
        .execute("getMemberByID");
      let user = result.recordset[0];
      if (user) {
        let passwordMatch = await bcrypt.compare(Password, user.Password);
        console.log(user);
        passwordMatch
          ? res.json({ success: true, message: "logged in successfully" })
          : res.json({ success: false, message: "Wrong Credetnials" });
      } else {
        res.json({
          success: false,
          message: "User not found",
        });
      }
    } else {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  } catch (error) {}
}
module.exports = {
  getMemberById,
  getMembersWithLoans,
  registerUser,
  loginUser,
};