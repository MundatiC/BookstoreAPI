const { tokenVerifier } = require("../utils/token");
const config = require("../config/config");


async function adminTokenValidation(req, res, next) {
  let token = req.headers["authorization"]?.split(" ")[1];

  try {
    if (!token)
      return next({ status: 400, message: "Provide a token to proceed" });

    let user = await tokenVerifier(token);




      let role = user.Role;
      if (role === "Admin") {
        next();
      } else {
        next({ status: 401, message: "Unauthorized" });
      }
     

  } catch (error) {
    next({ status: 401, message: error.message });

  }

}




module.exports = adminTokenValidation;