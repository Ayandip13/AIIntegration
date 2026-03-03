const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database got connected at", process.env.MONGO_URI);
    } catch (error) {
        console.error("Error connecting to Database:", error);
    }
};

module.exports = connectDB;