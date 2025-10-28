import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
  dotenv.config();
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
