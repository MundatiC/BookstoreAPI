const joi  = require('joi');


const new_member_Schema = joi.object({
    Name: joi.string()
        .min(3)
        .required(),
    Address: joi.string()
        .min(5)
        .max(30)
        .required(),
    ContactNumber: joi.string()
        .min(13)
        .max(13)
        .required(),
    Email: joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    Password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
        .required(),
    c_password: joi.ref('Password')



}).with('Password', 'c_password')

module.exports = { new_member_Schema }