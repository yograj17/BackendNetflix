const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  setpassword: {
    type: String,
  },
});

const userSchema = mongoose.model("user", userschema);
module.exports = userSchema;
