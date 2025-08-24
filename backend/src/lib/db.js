import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.log("⚠️  MONGODB_URI is not defined in environment variables");
      console.log("📝 Please set up MongoDB connection in your .env file");
      return;
    }
    
    // Skip connection if using placeholder URI
    if (process.env.MONGODB_URI.includes('your-mongodb-uri-here')) {
      console.log("⚠️  Using placeholder MongoDB URI - skipping connection");
      console.log("📝 Please update MONGODB_URI in your .env file with a real MongoDB connection string");
      return;
    }
    
    console.log("🔄 Attempting to connect to MongoDB...");
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("❌ MongoDB connection failed - continuing without database");
    console.log("⚠️  Database features will not be available");
    console.log("\n📋 To fix this issue:");
    console.log("1. Set up a MongoDB database (MongoDB Atlas recommended for cloud)");
    console.log("2. Update MONGODB_URI in your .env file");
    console.log("3. For local MongoDB: ensure MongoDB service is running");
    console.log("4. For MongoDB Atlas: use the connection string from your cluster");
    console.log("\n🔗 MongoDB Atlas: https://www.mongodb.com/atlas");
    
    // Don't throw the error - let the app continue without database
    return;
  }
};
