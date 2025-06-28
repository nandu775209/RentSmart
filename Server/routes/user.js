const express = require("express");
const router = express.Router();
const { signUp, logIn} = require("../controller/user");

router.post("/login", logIn);
router.post("/signup", signUp);


module.exports = router; 
                 