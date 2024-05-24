const express = require("express")
const taskRouter = require("./routers/taskRouter")
const connectDB = require("./config/dbConnection")
require("dotenv").config()

const app = express()
app.locals.title = 'My App'

app.use(express.json())
app.use("/api/v1/tasks", taskRouter)

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

console.dir(app.locals.title)