// require('dotenv').config({path: './.env'});
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env",
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () =>
            console.log(`listening on port ${process.env.PORT}`)
        );
    })
    .catch((err) => {
        console.log("Mongodb connection failed", err);
    });

/*
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (err) => {
            console.log(err);
            throw err;
        });

        app.listen(process.env.PORT, () => {
            console.log(`listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(error);
        throw err;
    }
})();
*/
