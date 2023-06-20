const mssql = require("mssql");
const config = require("../config/config");
const bcrypt = require("bcrypt");

const getAUser = require('../utils/getAMember')
const { tokenGenerator } = require('../utils/token');
const { newMemberValidator } = require("../validators/newMemberValidator");
const { tokenVerifier } = require('../utils/token')

async function getMemberById(req, res) {
  let token = req.headers['authorization'].split(' ')[1];
  try{

    let user = await tokenVerifier(token);
    const { id } = req.params;

    if(user){
            
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


  } catch(error){
    if(error.message.includes('token') || error.message.includes('invalid') ){
      res.status(403).json(
        {
          success: false,
          message:'Login again'
        }
      )

    } else if(error.message.includes('expired')){
      res.status(403).json({
        success: false,
        message: 'Token expired login again'
      })
    }
  }
  
}

async function getMembersWithLoans(req, res) {
  let token = req.headers['authorization'].split(' ')[1];

  try{

    let user = await tokenVerifier(token);
    if(user){
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
   

  } catch(error){
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
async function registerUser(req, res) {

  let user = req.body;
    // let salt = await bycrypt.genSalt(8);
    // let hashed_pwd = await bycrypt.hash(user.Password, salt)

  try {
    let { value } = req
   
    
    let hashed_pwd = await bcrypt.hash(user.Password, 8);


    let sql = await mssql.connect(config);

    if (sql.connected) {
      let results = await sql.request()
        .input("Name", value.Name)
        .input("Address", value.Address)
        .input("ContactNumber", value.ContactNumber)
        .input("Password", hashed_pwd)
        .execute("InsertMemberProcedure")

      console.log(results)
      if (results.rowsAffected[0] > 0) {
        res.status(201).send({
          success: true,
          message: "New member successfully added",
      
        });
      } else {
        res.status(500).send({
          success: false,
          message: "An error occurred"
        });
      }

    }
  } catch (error) {
    res.send(error.message)

  }

}
async function loginUser(req, res) {
  let { MemberID, Password } = req.body;
  try {
    let user = await getAUser(MemberID);

    if (user) {
      let passwords_match = await bcrypt.compare(Password, user.Password);
      if (passwords_match) {

        let token = await tokenGenerator({
          MemberID: user.MemberID,

        })
        console.log(token)


        res.json({
          success: true,
          message: "log in successful",
          token
        })
      } else {
        res.status(401).json({
          success: false,
          message: "wrong credentials"
        })
      }

    } else {
      res.status(404).json({
        success: false,
        message: "No user found"
      })
    }

  }
  catch (error) {

  }
}
module.exports = {
  getMemberById,
  getMembersWithLoans,
  registerUser,
  loginUser,
};