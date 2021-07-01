import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: String,
    googleId: String
})

mongoose.model('User', userSchema); 