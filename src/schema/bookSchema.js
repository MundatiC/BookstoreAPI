const joi = require("joi");

const new_book_Schema = joi.object({
  Title: joi.string().min(5).required(),
  Author: joi.string().min(5).required().max(30),
  PublicationYear: joi.number().required().min(4).max(4),
  Status: joi.string().required(),
});

module.exports = { new_book_Schema };
