import express from "express";
import {registration,login, currentUser} from "../controllers/userController.js";
import jwtTokenValidater from "../middlewares/tokenValidateHandler.js";

const userRouter = express.Router()

userRouter.post("/registration", registration)
userRouter.post("/login", login)
userRouter.get("/currentUser",jwtTokenValidater, currentUser)

export default userRouter