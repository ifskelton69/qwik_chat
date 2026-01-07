import express from 'express'
import dotenv from "dotenv";
import { connectdb } from "./lib/db.js";
import authroutes from "./routes/auth.routes.js";
import messageroutes from "./routes/message.routes.js";
import cookieparser from "cookie-parser";
import cors from 'cors'
import path from 'path';
import {app, server} from './lib/socket.js';

dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

console.log("🚀 Starting server...");
console.log("Environment:", process.env.NODE_ENV);
console.log("Port:", PORT);

app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: process.env.NODE_ENV === "production" 
        ? process.env.CLIENT_URL || true
        : "http://localhost:5173",
    credentials: true
}));

app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'ok', 
        timestamp: new Date().toISOString() 
    });
});

app.get('/api/test', (req, res) => {
    res.send(req.cookies);
});

app.use('/api/auth', authroutes);
app.use('/api/messages', messageroutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

server.listen(PORT, async () => {
    console.log(`✅ Server is running on port: ${PORT}`);
    try {
        await connectdb();
        console.log("✅ Database connection initiated");
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
    }
});