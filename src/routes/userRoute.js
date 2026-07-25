const express = require("express")
const router = express.Router()
const auth = require("../middlewares/auth")
const { createUser, logInUser, getProfile, deleteProfile, updateProfile } = require("../controllers/userController")

router.post("/register", createUser)
router.post("/login", logInUser)
router.get("/profile", auth, getProfile)
router.delete("/delete", auth, deleteProfile)
router.post("/update", auth, updateProfile)

module.exports = router;