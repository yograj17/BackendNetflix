const userSchema = require("../model/userSchema");

const userController = async (req, res) => {
  try {
    const { username, password, setpassword } = req.body;

    if (password != setpassword) {
      return res.json({
        success: false,
        message: "Password Do Not Match",
      });
    }

    const usernamecheck = await userSchema.find({
      username,
    });
    if (usernamecheck.length) {
      return res.json({
        success: false,
        message: "Username Already Exist",
      });
    }

    const respones = await userSchema.create({
      username,
      password,
      setpassword,
    });
    res.json({
      success: true,
      data: respones,
      message: "User Created Successfull",
    });
  } catch (error) {
    return res.json({
      success: false,
      data: error.message,
      message: "Error Found",
    });
  }
};

module.exports = userController;
