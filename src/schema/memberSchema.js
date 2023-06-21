const joi = require("joi");

const new_member_Schema = joi
  .object({
    Name: joi.string().min(3).required(),
    Address: joi.string().min(5).required().max(30),
    ContactNumber: joi.string().required().min(13).max(13),
    Password: joi
      .string()
      .required()
      .pattern(new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
      )),
    c_password: joi.ref("Password"),
    Email: joi
      .string()
      .email({ tlds: { allow: false } }),
  })
  .with("Password", "c_password");


module.exports = { new_member_Schema }
