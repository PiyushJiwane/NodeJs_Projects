import express from "express";
import dotenv from "dotenv"
dotenv.config()
import contactRouter from "./routes/contactRouter.js";

const app=express()

app.use("/api/contact",contactRouter)

const PORT=process.env?.PORT || 3000


app.listen(PORT,()=>{
    console.log(`server is listening on port : ${PORT}`);
})