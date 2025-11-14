import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { DB_NAME } from './constants.js';

dotenv.config({
    path: 'public/temp/.env',
});

connectDB();

const app = express();  

app.use(cors());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' })); 
app.use(express.static('public'));
app.use(cookieParser());

// Import and use routes
import userRouter from './routes/user.routes.js';



// Define routes here
app.use('/api/v1/users', userRouter);



export default app;