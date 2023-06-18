const joi  = require('joi');


const new_member_Schema = joi.object({
    Name: joi.string()
                .min(3).required(),
    Address: joi.string()
                .min(5)
                .required()
                .max(30),
    ContactNumber: joi.string()
                .required()
                .min(13)
                .max(13),
    Password: joi.string()
                .required()
                .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),
    c_password: joi.ref('Password')



}).with('Password', 'c_password')

module.exports = { new_member_Schema }