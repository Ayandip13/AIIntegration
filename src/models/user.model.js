const mongoose = require("mongoose");

const useerSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: [true, "Username already exists"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Account already exists"]
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("User", useerSchema);