const { new_book_Schema } = require("../schema/bookSchema");

function newBookValidator(body) {
  let user = new_book_Schema.validate(body, { abortEarly: false });

  if (user.error?.details.length > 0) {
    let message = user.error.details.map((err) => err.message);

    throw new Error(message.join("\n"));
  } else {
    return user;
  }
}

module.exports = { newBookValidator };
