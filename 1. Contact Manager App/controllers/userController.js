import expressAsyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"

const saltRound=10

const registration=async (req,res)=>{
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields are manditory")
    }

    const bcrypt_password=await bcrypt.hash(password,saltRound)

    const newUser = new userModel({
        username, email, password:bcrypt_password
    })

    await newUser.save()

    res.status(201).json({
        "data": "data got saved successfully !!!"
    })
}

const login=(req,res)=>{
    console.log("registration");
}

const currentUser=(req,res)=>{
    console.log("registration");
}

export {registration,login,currentUser}