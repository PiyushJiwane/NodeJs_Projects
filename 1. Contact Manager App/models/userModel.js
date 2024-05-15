import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please add the user name"]
    },
    email: {
        type: String,
        required: [true, "please add the email address"],
        unique:[true,"email address already taken"]
    },
    password: {
        type: String,
        required: [true, "please add the password"]
    }
}, {
    timestamps: true
})

export default mongoose.model("user", userSchema)