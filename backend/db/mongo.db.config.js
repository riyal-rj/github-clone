import mongoose from "mongoose";
import { ENV_VARS } from "../env/env.variables.js";

export const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(ENV_VARS.MONGO_ATLAS_DB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}