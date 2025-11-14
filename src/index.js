import dotenv from "dotenv";
dotenv.config({
  path: "public/temp/.env",
});
import connectDB from "./db/index.js";
import app from "./app.js";

// import express from "express";
// const app =express();

connectDB()
.then(() => {
   
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
})
.catch((error) => {
    console.error("Failed to connect to the database:", error);
});

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
