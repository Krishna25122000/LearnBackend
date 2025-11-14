import dotenv from "dotenv";
dotenv.config({
  path: "public/temp/.env",
});
import connectDB from "./db/index.js";

// import express from "express";
// const app =express();

connectDB();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log("Connected to MongoDB");
//         app.on("error", (error) => {
//             console.error("Error in Express app:", error);
//             throw error;
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });

//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// })();
