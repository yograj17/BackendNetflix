const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const loginController = require("../controller/loginController");

router.post("/api/register", userController);
router.post("/api/userlogin", loginController);

module.exports = router;
