const { newBookValidator } = require("../validators/newBookValidator");
function newBookMiddleware(req, res, next) {
  let user = req.body;
  try {
    let { value } = newBookValidator(user);
    req.value = value;
    next();
  } catch (error) {
    next({ status: 400, message: error.message });
  }
}

module.exports = newBookMiddleware;
