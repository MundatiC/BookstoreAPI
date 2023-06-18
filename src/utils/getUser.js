const mssql = require("mssql");
const config = require("../config/config");



async function getUser(user_id) {

    let sql = await mssql.connect(config);
    if (sql.connected) {
        let result = await sql
            .request()
            .input("MemberID", user_id)
            .execute("getMemberByID");
        let user = result.recordset[0];

        return user;
    }
}

module.exports = {
    getUser
}