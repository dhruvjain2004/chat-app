import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error("⚠️  MONGODB_URI is not defined in environment variables");
      console.error("📝 Please set up MongoDB connection in your .env file");
      return false;
    }
    
    // Skip connection if using placeholder URI
    if (process.env.MONGODB_URI.includes('your-mongodb-uri-here')) {
      console.error("⚠️  Using placeholder MongoDB URI - skipping connection");
      console.error("📝 Please update MONGODB_URI in your .env file with a real MongoDB connection string");
      return false;
    }
    
    console.log("🔄 Attempting to connect to MongoDB...");
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    console.error("⚠️  Database features will not be available");
    console.error("\n📋 To fix this issue:");
    console.error("1. Set up a MongoDB database (MongoDB Atlas recommended for cloud)");
    console.error("2. Update MONGODB_URI in your .env file");
    console.error("3. For local MongoDB: ensure MongoDB service is running");
    console.error("4. For MongoDB Atlas: use the connection string from your cluster");
    console.error("\n🔗 MongoDB Atlas: https://www.mongodb.com/atlas");
    
    // Don't throw the error - let the app continue without database
    return false;
  }
};
