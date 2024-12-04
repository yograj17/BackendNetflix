const userSchema = require("../model/userSchema");

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const respones = await userSchema.find({ username });
    if (respones == 0) {
      return res.json({
        success: false,
        message: "username incorrect",
      });
    }

    if (respones[0].password !== password) {
      return res.json({
        success: false,
        message: "password incorrect",
      });
    }
    res.json({
      success: true,
      data: respones,
      message: "User Login Successfull",
    });
  } catch (error) {
    return res.json({
      success: false,
      data: error.message,
      message: "Error Found",
    });
  }
};
module.exports = loginController;
