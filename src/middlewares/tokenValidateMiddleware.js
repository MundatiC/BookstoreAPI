const { tokenVerifier } = require('../utils/token');


async function tokenValidateMiddleware (req, res, next){
    let token = req.headers['authorization']?.split(' ')[1];
       try{
         if(!token) return next({status:400, message: 'Token not provided'})
        let user = await tokenVerifier(token);
        let role = user.Role;
      if (role === "user" || role === "Admin") {
        next();
      } else {
        next({ status: 401, message: "Unauthorized" });
      }
  
    } catch (error) {
  
      next({ status: 401, message: error.message });
  
    }
  }

  module.exports =  tokenValidateMiddleware 