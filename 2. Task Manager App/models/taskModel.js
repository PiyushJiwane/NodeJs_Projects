const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    taskDetails: {
        type: String,
        required: [true, "please add the task details"]
    }
}, {
    timestamps: true
})

const taskModel = mongoose.model("task", taskSchema)

module.exports = taskModel