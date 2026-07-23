const express = require("express")
const router = express.Router()

const { createUser, logInUser } = require("../controllers/userController")

router.post("/register", createUser)
router.post("/login", logInUser)

module.exports = router;