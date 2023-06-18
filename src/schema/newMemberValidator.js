const { new_member_Schema } = require('../schema/memberSchema')

function newMemberValidator (body){
    
        let user = new_member_Schema.validate(body, {abortEarly: false})

        if(user.error?.details.length > 0){
            let message = user.error.details.map(err=> err.message)
            
            throw new Error(message.join("\n"))
        } else{
            return user
        }
        
  
  

}

module.exports = { newMemberValidator }