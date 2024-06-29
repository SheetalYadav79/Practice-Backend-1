const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: {
        type: String,
    },
    userCourse: {
        type: String,
    },
    userAge: {
        type: Number,
    },
    userImage: {
        type: String,
    }
});

module.exports = mongoose.model("userModel", userSchema);