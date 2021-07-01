import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import passport from 'passport';
import cookieSession from 'cookie-session';
import authRoutes from './routes/authRoutes.js'
import './models/User.js'
import './services/passport.js'

// ***********************MIDDLIWWARES*********************************//
dotenv.config()

const app = express();
mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true, 
        useCreateIndex: true,
        useUnifiedTopology: true
        
    },
    () => console.log('DB connected')
)

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [process.env.COOKIE_SECRET]
    })
);

const userSchema = new mongoose.Schema()

app.use(passport.initialize())
app.use(passport.session());

// ************************ROUTES******************************//
authRoutes(app);

// ************************PORT LISTENERS**********************//
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`the server is up and running on port ${PORT}`));