const express = require("express")
require("dotenv").config()
const connectDB = require("./config/dbConnection")

const router=require("./routes/products")

const app = express()

app.use(express.json())

app.use("/api/v1/products",router)

const PORT = process.env?.PORT || 3000

const startServer = async () => {
    try {
        await connectDB(process.env.CONNECTION_STRING)
        app.listen(PORT, () => {
            console.log(`server is listening on port : ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer()
