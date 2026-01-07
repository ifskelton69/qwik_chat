import mongoose from "mongoose";

export const connectdb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds
        });
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error:`, error.message);
        if (process.env.NODE_ENV !== 'production') {
            process.exit(1);
        }
    }
};