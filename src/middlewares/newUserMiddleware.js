const { newMemberValidator } = require('../validators/newMemberValidator');
function newUserMiddleware(req, res, next) {
    let user = req.body;
    try {
        let { value } = newMemberValidator(user);
        req.value = value;
        next();
    } catch (error) {
        next({ status: 400, 
            message: error.message });
        
    }
    
}

module.exports = newUserMiddleware;