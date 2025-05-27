import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import { response } from "express";
import jwt from "jsonwebtoken";
import validator from "validator";


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//Route for user login
const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exists" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {

            const token = createToken(user._id)
            res.json({ success: true, token })

        } else {
            res.json({ success: false, message: 'Invalid Credentials' })
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

//Route for user register
const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Check User Already Exist or Not
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        // Validating Email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Plese Enter a valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Plese Enter a strong password" })
        }

        //Hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

//Route for admin login
const adminLogin = async (req, res) => {

    try {

        const {email, password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password,process.env.JWT_SECRET);

            res.json({success:true,token})
        }else{
            res.json({success:false,message: "Invalid Credentials"})
        }
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}


export { loginUser, registerUser, adminLogin }