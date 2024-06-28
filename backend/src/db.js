import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('monguito');
        console.log("db mongo connected");
    } catch (error) {
        console.log(error)
        console.log("db not connected");
    }
};