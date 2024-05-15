import express from "express";
import {registration,login, currentUser} from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.post("/registration", registration)
userRouter.post("/login", login)
userRouter.get("/currentUser", currentUser)

export default userRouter