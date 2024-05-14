import express from "express";
import dotenv from "dotenv"
dotenv.config()
import contactRouter from "./routes/contactRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
import db from "./config/dbConnection.js";

const app=express()

db

app.use(express.json())
app.use("/api/contact",contactRouter)
app.use(errorHandler)

const PORT=process.env?.PORT || 3000


app.listen(PORT,()=>{
    console.log(`server is listening on port : ${PORT}`);
})