const express = require("express");
const app = express();
app.use(express.json());

// Required Routes
const authRouter = require("./routes/auth.routes");

// Using all the routes
app.use("/api/auth", authRouter);
module.exports = app;


