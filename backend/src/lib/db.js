import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.log("⚠️  MONGODB_URI is not defined in environment variables");
      console.log("📝 Please set up MongoDB connection in your .env file");
      return;
    }
    
    console.log("🔄 Attempting to connect to MongoDB...");
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("❌ MongoDB connection error:", error.message);
    console.log("\n📋 To fix this issue:");
    console.log("1. Set up a MongoDB database (MongoDB Atlas recommended for cloud)");
    console.log("2. Update MONGODB_URI in your .env file");
    console.log("3. For local MongoDB: ensure MongoDB service is running");
    console.log("4. For MongoDB Atlas: use the connection string from your cluster");
    console.log("\n🔗 MongoDB Atlas: https://www.mongodb.com/atlas");
  }
};
