const bcrypt = require("bcrypt")
const UserModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const { isValid, isValidName, isValidContact, isValidEmail, isValidObjectId, isValidPassword } = require("../utils/validator")

//Register User
const createUser = async (req, res) => {
    try {
        let userData = req.body;

        if (!userData || Object.keys(userData).length === 0) {
            return res.status(400).json({ msg: "Bad Request, No Data Provided" })
        }

        let { fullName, email, password, mobile } = userData

        //FullName Validation
        if (!isValid(fullName)) {
            return res.status(400).json({ msg: "Full Name is Required" })
        }

        if (!isValidName(fullName)) {
            return res.status(400).json({ msg: "Invalid Name" })
        }

        //Email Validation 
        if (!isValid(email)) {
            return res.status(400).json({ msg: "Email is Required" })
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({ msg: "Invalid Email" })
        }

        let emailExist = await UserModel.findOne({ email })
        if (emailExist) {
            return res.status(400).json({ msg: "Email already exist" })
        }

        //Mobile Number Validation
        if (!isValid(mobile)) {
            return res.status(400).json({ msg: "Contact Number is Required" })
        }

        if (!isValidContact(mobile)) {
            return res.status(400).json({ msg: "Invalid Contact Number" })
        }

        let ContactNoExist = await UserModel.findOne({ mobile })
        if (ContactNoExist) {
            return res.status(400).json({ msg: "Contact Number already exist" })
        }

        //Password Validation
        if (!isValid(password)) {
            return res.status(400).json({ msg: "Password is Required" })
        }

        if (!isValidPassword(password)) {
            return res.status(400).json({ msg: "Invalid Password" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        userData.password = hashedPassword

        let addedUser = await UserModel.create(userData)

        return res.status(201).json({ msg: "User Added Successfully", addedUser })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Internal Server Error" })
    }
}


//Login User
const logInUser = async (req, res) => {
    try {
        let userData = req.body;

        if (!userData || Object.keys(userData).length === 0) {
            return res.status(400).json({ msg: "Bad Request, No Data Provided" })
        }

        let { email, password } = userData;

        //Email Validation

        if (!isValid(email)) {
            return res.status(400).json({ msg: "Email is Required" })
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({ msg: "Invalid Email" })
        }

        //Password Validation

        if (!isValid(password)) {
            return res.status(400).json({ msg: "Password is Required" })
        }

        if (!isValidPassword(password)) {
            return res.status(400).json({ msg: "Password must be 8-20 chars with uppercase, lowercase, number and " })
        }

        let user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: "Email not registered" })
        }

        let passwordCheck = await bcrypt.compare(password, user.password)

        if (!passwordCheck) {
            return res.status(400).json({ msg: "Incorrect password" })
        }

        let token = jwt.sign(
            {
                userId: user._id
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "2hr"
            })



        return res.status(200).json({ msg: "User logged in successfully", token })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Internal Server Error" })
    }


}


module.exports = { createUser, logInUser }