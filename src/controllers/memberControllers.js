const mssql = require("mssql");
const config = require("../config/config");

async function createMember(req, res) {

    const { Name, Address, ContactNumber } = req.body;

    let sql = await mssql.connect(config);

    if (sql.connected) {

        const request = sql.request();

        request.input("Name", Name)

            .input("Address", Address)

            .input("ContactNumber", ContactNumber);

        let result = await request.execute("InsertMemberProcedure");

        res.json({

            success: true,

            message: "Created member successfully",

            data: result.recordset

        });

    }

}



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

                data: result.recordset[0]

            });

        } else {

            res.status(404).json({

                success: false,

                message: "Member not found"

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

            data: result.recordset

        });

    }

}

module.exports = {
    createMember,
    getMemberById,
    getMembersWithLoans,
};

