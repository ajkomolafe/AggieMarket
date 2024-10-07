require("dotenv").config(); //Doesn't need to be called after config
const mongoClient = require('mongoose');
const express = require("express");
const mongoose = require("mongoose");
const api = express();

mongoose.connect(process.env.DATABASE_URI);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

api.use(express.json()); //Allows api to take json requests

const userRouter = require("./routers/users"); //aggiemarketdata > users
api.use("/users", userRouter) //requests on localhost:3000/users go to userRouter

api.listen(3000, () => console.log("Server Started"));