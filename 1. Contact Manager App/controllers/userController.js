import expressAsyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const SALT_ROUND=process.env.SALT_ROUND
const JWT_SECRETE_KEY=process.env.JWT_SECRETE_KEY

const registration=expressAsyncHandler(async (req,res)=>{
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields are manditory")
    }

    const bcrypt_password=await bcrypt.hash(password,SALT_ROUND)

    const newUser = new userModel({
        username, email, password:bcrypt_password
    })

    const user=await newUser.save()

    if(user._id){
        res.status(201).json({
            "data": `data got saved successfully with an id : ${user._id}`
        })
    }else{
        res.status(400)
        throw new Error("Invalid Data")
    }
})

const login=expressAsyncHandler(async (req,res)=>{
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400)
        throw new Error("All fields are manditory")
    }

    const result=await userModel.findOne({email})

    const hashedPassword=await bcrypt.compare(password,result.password)

    if(email && hashedPassword){
        const jwt_token=await jwt.sign({
            _id:result._id,
            u_name:result.username
        },JWT_SECRETE_KEY)
        res.status(200).json({jwt_token})
    }else{
        res.status(400)
        throw new Error("email and password is incorrect !!!")
    }
})

const currentUser=(req,res)=>{
    console.log("registration");
}

export {registration,login,currentUser}