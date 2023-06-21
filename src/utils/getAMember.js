const mssql = require('mssql');
const config = require('../config/config')

async function getAUser(Email) {

    let sql = await mssql.connect(config)
    if (sql.connected) {
        let results = await sql.request()
            .input("Email", Email)
            .execute("GetMemberByEmailProcedure")
        let user = results.recordset[0]

        return user
    }

}

module.exports = getAUser;